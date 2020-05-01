let input;
let total = 0;

do {
    input = prompt('Введите число');
    if(!isNaN(input)){
    total += Number(input);
    } else {
        alert('Было введено не число, попробуй еще раз');
    }
} while (input !==null);

alert(`Общая сумма равна ${total}`)
