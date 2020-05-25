class StringBuilder  {
    constructor(value) {
        this._value = value
    }

    get value() {
        return this._value
    }
    append(detail) {
        return this._value = `${this.value}${detail}`
    }
    prepend(detail) {
        return this._value = `${detail}${this.value}`
    }
    pad(detail) {
        return this._value = `${detail}${this.value}${detail}`
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='