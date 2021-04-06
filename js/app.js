let accordions = document.querySelectorAll('.faq-accordion-text-visible');
let accordionsPlus = document.querySelectorAll('.vertical');
let hideText = document.querySelectorAll('.faq-accordion-text-hide');

if(accordions.length > 0) {
  for(let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', (e) => {
      accordionsPlus[i].classList.toggle('span-hide');
      if(accordionsPlus[i].classList.contains('span-hide')) {
        hideText[i].style.maxHeight = hideText[i].scrollHeight + 'px';
      } else {
        hideText[i].style.maxHeight = 0;
      }
      hideText[i].classList.toggle('visible');
    });
  }
}

// popup
const popupLinks  = document.querySelectorAll('.popup-link');
const body  = document.querySelector('body');
const closePopup  = document.querySelector('.popup-closed');
const popup  = document.querySelector('.modal');


if(popupLinks.length > 0) {
  for(let i = 0; i < popupLinks.length; i++) {
    const popupLink = popupLinks[i];

    popupLink.addEventListener('click', function (e) {
      popupOpen();
      bodyLock();
    });
  }
}

popup.addEventListener('click', (e) => {
  if(e.target === popup) {
    popupClose();
    bodyLock();
  }
});
closePopup.addEventListener('click', () => {
  popupClose();
  bodyLock();
});

function popupOpen() {
  popup.classList.add('modal-active');
}
function popupClose() {
  popup.classList.remove('modal-active');
}
function bodyLock() {
  body.classList.toggle('lock');
}