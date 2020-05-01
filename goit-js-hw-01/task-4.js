
let credits = 23580;
let pricePerDroid = 3000;

const userInput = prompt("Сегодня и только сегодня, распродажа дроидов по цена - 3000 за штуку. Введите необходимое количество.");

if (userInput === null || userInput === '') { 
     alert("Отменено пользователем!");

} else if (Number(userInput) > 0) { 
     let totalPrice = pricePerDroid * Number(userInput);
     alert(`Общая сумма заказа ${totalPrice}`);
}

let totalPrice = pricePerDroid * Number(userInput);

if (totalPrice > credits) {
     alert('Недостаточно средств на счету');

} else {
     balance = credits - totalPrice;
     alert(`Вы купили ${userInput} дроидов, на счету осталось ${balance}`)
}
