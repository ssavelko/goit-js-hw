let input;
const numbers = [];
let total = 0;


do {
    input = prompt('Введите число');
    const inputNumber = Number(input);
    if (!Number.isNaN(inputNumber)) {
        if(input !== null || input !==''){
            numbers.push(inputNumber)
            console.log(numbers);
        }
    } else {
    alert('Было введено не число, попробуй еще раз')
    }
} while (input !== null)

for (const value of numbers) {
    total += +(value);
}

console.log (`Общая сумма чисел равна ${total}`);