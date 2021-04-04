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