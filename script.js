let toggleBtn = document.querySelector('button');
let card = document.querySelector('.card');
toggleBtn.addEventListener('click', function() {
  if (this.value === 'day') {
    card.classList.toggle('flip');
    this.value = 'night';
    this.textContent = 'Night';
    this.style.backgroundColor = '#23297a';
    this.style.color = '#f2f3f4';
  } else if (this.value === 'night') {
    card.classList.toggle('flip');
    this.value = 'day';
    this.textContent = 'Day';
    this.style.color = '#100c08';
    this.style.backgroundColor = '#fefe22';
  }
});
