let toggleBtn = document.querySelector('button');
let card = document.querySelector('.card');
toggleBtn.addEventListener('click', function() {
  if (this.value === 'day') {
    card.classList.toggle('flip');
    this.value = 'night';
    this.textContent = 'Night';
  } else if (this.value === 'night') {
    card.classList.toggle('flip');
    this.value = 'day';
    this.textContent = 'Day';
  }
});
