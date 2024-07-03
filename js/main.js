let menuBtn = document.querySelector('.navbar');
let btn = document.getElementById('menu-btn');

document.querySelector('.icons #menu-btn').onclick = () => {
    if(menuBtn.classList.contains('active') && btn.classList.contains('active')){
        menuBtn.classList.remove('active');
        btn.classList.remove('active');
    }else{
    menuBtn.classList.toggle('active');
    btn.classList.toggle('active');
    }
};
// end
// ****
// TypeIce
let boxes = Array.from(document.querySelectorAll('.Secon-section .boxes .box'));
let bulletsImg = Array.from(document.querySelectorAll('.small-img img'));

for( let i = 0 ; i < bulletsImg.length ; i++){
  bulletsImg[i].onclick = function(){
    currentbox = parseInt(this.getAttribute('data-index'));
    showBox();
  }
}
function showBox(){
  removeActives();
  boxes[currentbox].classList.add('active');
  bulletsImg[currentbox].classList.toggle('active');
}
function removeActives(){
  boxes.forEach(function(box) {
    box.classList.remove('active');
  });
  bulletsImg.forEach(function(bullet){
    bullet.classList.remove('active');
  });
}
// end
// ****
// heart icons
function changeHearticon1( icId1, icId2) {
  let hearticon1 = document.getElementById(icId1);
  let hearticon2 = document.getElementById(icId2);

  hearticon1.classList.toggle('active');
  hearticon2.classList.toggle('active');
}
function changeHearticon2(icId1, icId2) {
  let hearticon1 = document.getElementById(icId1);
  let hearticon2 = document.getElementById(icId2);

  hearticon2.classList.toggle('active');
  hearticon1.classList.toggle('active');
}
// plus icons
function changeplusicon1( icId1, icId2) {
  let plusIcon1 = document.getElementById(icId1);
  let plusIcon2 = document.getElementById(icId2);

  plusIcon1.classList.toggle('active');
  plusIcon2.classList.toggle('active');
}
function changeplusicon2(icId1, icId2) {
  let plusIcon1 = document.getElementById(icId1);
  let plusIcon2 = document.getElementById(icId2);

  plusIcon2.classList.toggle('active');
  plusIcon1.classList.toggle('active');
}
// end
// ****
// popup img
function showPopup(popupId, event) {
  event.stopPropagation();
  const popup = document.getElementById(popupId);
  popup.style.display = 'block';
}

function hidePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'none';
}

window.addEventListener('click', function() {
  const popups = document.querySelectorAll('.popup-container');
  popups.forEach(function(popup) {
      popup.style.display = 'none';
  });
});
// end
// ****
// Testimonial
let cards = Array.from(document.querySelectorAll('.Testimonial .Secon-section .cards .card'));
let bulletsImgTestim = Array.from(document.querySelectorAll('.Testimonial .small-img img'));

for( let i = 0 ; i < bulletsImgTestim.length ; i++){
  bulletsImgTestim[i].onclick = function(){
    currentCard = parseInt(this.getAttribute('data-index'));
    showCard();
  }
}
function showCard(){
  removeActivesCardes();
  cards[currentCard].classList.add('active');
  bulletsImgTestim[currentCard].classList.toggle('active');
}
function removeActivesCardes(){
  cards.forEach(function(card) {
    card.classList.remove('active');
  });
  bulletsImgTestim.forEach(function(bullet){
    bullet.classList.remove('active');
  });
}
// 
let header = document.querySelector(".header");
window.onscroll =function(){
    if(window.scrollY >= 100){
       header.classList.add('bg');
    }else{
      header.classList.remove('bg');
    }
}