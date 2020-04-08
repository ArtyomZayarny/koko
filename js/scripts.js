'use strict'

window.onload = ( () => {
//GET Modal
const modal = document.getElementById('modal');
//get cards container
const cards = document.querySelector('.course__cards');

//Listen click
cards.addEventListener( 'click' , (e) => {
if (e.target.classList.contains('continue')) {
    modal.style.display = 'block';
}
})
//close modal
modal.addEventListener( 'click', (e) => {
  if(e.target.parentElement.tagName === 'BODY') {
      modal.style.display = 'none'
  }
})
})