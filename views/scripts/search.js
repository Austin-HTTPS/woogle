let searchField = document.getElementsByClassName('input')[0].querySelectorAll('input')[0];
searchField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
		search()
    }
});

function search(){
	let query = searchField.value;
	if(!query || query == "") return;
	let urlParams = new URLSearchParams(window.location.search);

	let type = urlParams.get('type')

	window.location = `/search?query=${query}&type=${type}`
}
