const toggleBtn = document.querySelector('.toggle-btn');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');
  menu.classList.toggle('active'); // mostra/esconde menu
});
