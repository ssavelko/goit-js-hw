const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('#ingredients');
ingredients.forEach(function (ingredient) {
  const li = document.createElement('li');
  li.innerHTML = ingredient;
  ul.append(li);
  console.log(li)
})
