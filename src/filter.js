export default function filterQuotes() {
	let filterValue = document.getElementById('search').value.toUpperCase();
	let ul = document.querySelector('ul');
	let li = ul.querySelectorAll('li');
	for(let i = 0; i < li.length; i++){
		if(li[i].innerHTML.toUpperCase().indexOf(filterValue) > -1){
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none';
		}
	}
}