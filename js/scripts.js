// inject year into footer
const curYear = new Date();
document.querySelector('#year').textContent = curYear.getFullYear()

document.addEventListener('DOMContentLoaded', function() {
  const hamMenu = document.querySelector('.hamMenu');
  const menu = document.querySelector('.menu');

  hamMenu.addEventListener('click', function() {

    menu.classList.toggle('open');
    
    hamMenu.classList.toggle('open');
    
    if (hamMenu.classList.contains('open')) {
      hamMenu.innerHTML = '&times;';
    } else {
      hamMenu.innerHTML = '&#9776;';
    }
  });
});