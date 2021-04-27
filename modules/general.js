const rimraf = require('rimraf');

function purge(dir){
	let altered;
	if(dir[0] == ".")
		altered = dir;
	else
		altered = "./"+dir;
		
	rimraf(altered, function () { 
		console.log('done'); 
	});
}

module.exports = {
	purge: purge
}