function Account(login, email) {
    this.login = login;
    this.email = email;
}

Account.prototype.getInfo = function () {
    return `login: ${this.login}, email: ${this.email}`;
}


console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

const mango = new Account('Mangozedog','mango@dog.woof')
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
console.log(mango.getInfo());

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

const poly = new Account('Polly','poly"mail.com')
poly.getInfo(); // Login: Poly, Email: poly@mail.com
console.log(poly.getInfo());