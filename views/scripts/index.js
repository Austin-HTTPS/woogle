let searchField = document.getElementsByClassName('input')[0].querySelectorAll('input')[0];
searchField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
		search()
    }
});
let buttons = document.getElementsByClassName('options')[0].querySelectorAll('button');
buttons[0].onclick = () => {
	search()
}
buttons[1].onclick = () => {
	if(!searchField.value) return;
	window.location = searchField.value;
}
function search(){
	let query = searchField.value;
	if(!query || query == "") return;

	window.location = `/search?query=${query}&type=all`
}