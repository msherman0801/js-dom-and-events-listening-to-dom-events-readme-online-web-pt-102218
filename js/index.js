let divs = document.querySelectorAll('div');
 
function bubble(e) {
  e.preventDefault();
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
 
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble, true);
}