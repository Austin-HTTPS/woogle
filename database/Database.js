const fs = require('fs')
class Database{
	constructor(location){
		this.data;
		this.location = "./database/"+location;

		this.sync()
	}
	sync(){
		try{
			this.data = JSON.parse(fs.readFileSync(this.location));
		}
		catch(e){this.data = {}}

		this.write()
	}
	write(){
		fs.writeFileSync(this.location, JSON.stringify(this.data, null, 4));
	}
	find(path){
		this.sync();
		return path.split('/').reduce((o,i)=>o[i], this.data)
		// return previous
	}
	remove(path){
		this.sync();

		delete this.data[path]
		
		this.write();
	}
	save(path, data){
		this.sync();

		this.data[path] = data;
		
		this.write();
	}

}
module.exports = Database;