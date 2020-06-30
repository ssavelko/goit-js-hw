const conterValue = document.querySelector('#value');
let value = 0;
conterValue.textContent = value;
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
increment.addEventListener('click', () => conterValue.textContent = value += 1)
decrement.addEventListener('click', () => conterValue.textContent = value -= 1)