let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');
    if(!isNaN(input)){
    total += Number(input);
    } else {
        alert('Было введено не число, попробуй еще раз');
    }
} while (input !==null);

for (const value of numbers) {
    total += +(value);
}

console.log (`Общая сумма чисел равно ${total}`);