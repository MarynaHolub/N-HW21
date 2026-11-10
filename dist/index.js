"use strict";
// Задание 1
// Абстрактный класс Animal
// Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
// Затем создайте классы `Dog` и `Cat`, которые наследуют `Animal` и реализуют метод `makeSound()` по-своему (`Dog` должен возвращать "Bark", а `Cat` — "Meow").
// Создайте массив типа `Animal[]`, включающий объекты `Dog` и `Cat`, и вызовите метод `makeSound()` для каждого элемента массива.
class Animal {
}
class Dog extends Animal {
    makeSound() {
        return 'Bark';
    }
}
class Cat extends Animal {
    makeSound() {
        return 'Meow';
    }
}
const animals = [new Dog(), new Cat()];
animals.forEach((animal) => console.log(animal.makeSound()));
// Задание 2
// Абстрактный класс Shape с цветом
// Создайте абстрактный класс `ColoredShape`, который наследует `Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.
// Реализуйте классы `ColoredCircle` и `ColoredRectangle`, которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.
// Выведите площадь и цвет для каждого объекта.
class Shape {
    describe() {
        console.log(`${this.name}: Area = ${this.calculateArea()}`);
    }
}
class ColoredShape extends Shape {
    describe() {
        console.log(`${this.color} ${this.name}: Area = ${this.calculateArea()}`);
    }
}
class ColoredCircle extends ColoredShape {
    radius;
    name = 'Colored Circle';
    color = 'red';
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Number((Math.PI * Math.pow(this.radius, 2)).toFixed(2));
        // toFixed() возвращает строку!, поэтому еще раз оборачиваем в Number()
    }
}
class ColoredRectangle extends ColoredShape {
    width;
    height;
    name = 'colored Rectangle';
    color = 'green';
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const shapes = [
    new ColoredCircle(4),
    new ColoredRectangle(2, 3),
];
shapes.forEach((shape) => shape.describe());
// Задание 3
// Абстрактный класс Appliance
// Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
// Затем создайте классы `WashingMachine` и `Refrigerator`, которые наследуют `Appliance` и реализуют методы `turnOn()` и `turnOff()`, выводя соответствующие сообщения.
// Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`, и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.
class Appliance {
}
class WashingMachine extends Appliance {
    name = 'Waschmachine';
    constructor() {
        super();
    }
    turnOn() {
        console.log(`${this.name} turned on`);
    }
    turnOff() {
        console.log(`${this.name} turned off`);
    }
}
class Refrigerator extends Appliance {
    name = 'Refrigerator';
    constructor() {
        super();
    }
    turnOn() {
        console.log(`${this.name} turned on`);
    }
    turnOff() {
        console.log(`${this.name} turned off`);
    }
}
const appliance = [new WashingMachine(), new Refrigerator()];
appliance.forEach((item) => item.turnOn());
appliance.forEach((item) => item.turnOff());
// Задание 4
// Абстрактный класс Account
// Создайте абстрактный класс `Account` с абстрактными методами `deposit(amount: number)` и `withdraw(amount: number)`.
// Реализуйте классы `SavingsAccount` и `CheckingAccount`, которые наследуют `Account`.
// В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.
// В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии.
// Проверьте работу методов на объектах обоих классов.
class Account {
}
class SavingsAccount extends Account {
    balance;
    rate;
    constructor(balance = 0, rate) {
        super();
        this.balance = balance;
        this.rate = rate;
    }
    deposit(amount = 0) {
        return (this.balance += amount);
    }
    applyInterest() {
        this.rate = 5;
        return (this.balance += (this.balance * this.rate) / 100);
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Amount must be greater than zero');
        }
        if (amount > this.balance) {
            throw new Error('Amount must be less than balance');
        }
        return (this.balance -= amount);
    }
    get getBalance() {
        return this.balance;
    }
}
class CheckingAccount extends Account {
    balance;
    constructor(balance = 0) {
        super();
        this.balance = balance;
    }
    deposit(amount = 0) {
        return (this.balance += amount);
    }
    withdraw(amount) {
        const comission = amount * 0.02;
        if (amount <= 0) {
            throw new Error('Amount must be greater than zero');
        }
        if (amount > this.balance + comission) {
            throw new Error('Amount must be less than balance + comission');
        }
        return (this.balance -= amount + comission);
    }
    get getBalance() {
        return this.balance;
    }
}
const savingAccount = new SavingsAccount(400, 5);
console.log('Opening balance SavingsAccount: ', savingAccount.getBalance);
savingAccount.deposit(300);
console.log('Balance after a deposit: ', savingAccount.getBalance);
savingAccount.applyInterest();
console.log('Balance after interest is accrued on the balance: ', savingAccount.getBalance);
savingAccount.withdraw(200);
console.log('Balance withdrawal: ', savingAccount.getBalance);
const checkingsAccount = new CheckingAccount(100);
console.log('Opening balance CheckingAccount: ', checkingsAccount.getBalance);
checkingsAccount.deposit(2000);
console.log('Balance after a deposit: ', checkingsAccount.getBalance);
checkingsAccount.withdraw(400);
console.log('Balance after a cash withdrawal with a fee: ', checkingsAccount.getBalance);
// Задание 5
// Абстрактный класс Media
// Создайте абстрактный класс `Media` с абстрактным методом `play()`.
// Затем создайте классы `Audio` и `Video`, которые наследуют `Media` и реализуют метод `play()` по-своему (например, `Audio` выводит "Playing audio", а `Video` — "Playing video").
// Создайте массив типа `Media[]`, включающий объекты `Audio` и `Video`, и вызовите метод `play()` для каждого элемента массива.
class Media {
}
class Audio1 extends Media {
    play() {
        console.log('Playing audio');
    }
}
class Video extends Media {
    play() {
        console.log('Playing video');
    }
}
const medias = [new Audio1(), new Video()];
medias.forEach((item) => item.play());
//# sourceMappingURL=index.js.map