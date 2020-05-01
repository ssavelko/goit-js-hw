
const ADMIN_PASSWORD = 'jqueryismyjam';
const userInput = prompt('Введите пароль');


if ( userInput === null || userInput === '' ){
    alert('Отменено пользователем!');
}
else if ( userInput !== ADMIN_PASSWORD ) {
    alert('Доступ запрещен, неверный пароль!');
}
else if ( userInput === ADMIN_PASSWORD ) {
    alert('Добро пожаловать!');
}
     