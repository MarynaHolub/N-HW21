// Задание 1
// Абстрактный класс Animal
// Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
// Затем создайте классы `Dog` и `Cat`, которые наследуют `Animal` и реализуют метод `makeSound()` по-своему (`Dog` должен возвращать "Bark", а `Cat` — "Meow").
// Создайте массив типа `Animal[]`, включающий объекты `Dog` и `Cat`, и вызовите метод `makeSound()` для каждого элемента массива.

abstract class Animal {
  abstract makeSound(): string;
}
class Dog extends Animal {
  makeSound(): string {
    return 'Bark'
  }
}
class Cat extends Animal {
  makeSound(): string {
    return 'Meow'
  }
}
const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach((animal) => console.log(animal.makeSound()));


// Задание 2
// Абстрактный класс Shape с цветом
// Создайте абстрактный класс `ColoredShape`, который наследует `Shape` (из задания 4 на уроке) и добавляет абстрактное поле `color`.
// Реализуйте классы `ColoredCircle` и `ColoredRectangle`, которые наследуют `ColoredShape`, задают `color` и реализуют метод `calculateArea()`.
// Выведите площадь и цвет для каждого объекта.

abstract class Shape {
  abstract name: string;

  abstract calculateArea(): number;

  describe(): void {
    console.log(`${this.name}: Area = ${this.calculateArea()}`);
  }
}

abstract class ColoredShape extends Shape {
  abstract color: string;

    describe(): void {
    console.log(`${this.color} ${this.name}: Area = ${this.calculateArea()}`);
  }
}

class ColoredCircle extends ColoredShape {
  name: string = 'colored Circle';
  color: string = 'red';
  constructor(public radius: number) {
    super();
  }

  calculateArea(): number {
    return Number((Math.PI * Math.pow(this.radius, 2)).toFixed(2));
    // toFixed() возвращает строку!, поэтому еще раз оборачиваем в Number()
  }
}

class ColoredRectangle extends ColoredShape {
  name: string = 'colored Rectangle';
  color: string = 'green';

  constructor(
    public width: number,
    public height: number,
  ) {
    super();
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}
const shapes: ColoredShape[] = [
  new ColoredCircle(4),
  new ColoredRectangle(2, 3),
];

shapes.forEach((shape) => shape.describe())

// Задание 3
// Абстрактный класс Appliance
// Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
// Затем создайте классы `WashingMachine` и `Refrigerator`, которые наследуют `Appliance` и реализуют методы `turnOn()` и `turnOff()`, выводя соответствующие сообщения.
// Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`, и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.

abstract class Appliance {
  abstract name: string;
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  name: string = 'Waschmachine';

  constructor() {
    super();
  }
  turnOn(): void {
    console.log(`${this.name} turned on`);
  }
  turnOff(): void {
    console.log(`${this.name} turned off`);
  }
}

class Refrigerator extends Appliance {
  name: string = 'Refrigerator';

  constructor() {
    super();
  }
  turnOn(): void {
    console.log(`${this.name} turned on`);
  }
  turnOff(): void {
    console.log(`${this.name} turned off`);
  }
}

const appliance: Appliance[] = [new WashingMachine(), new Refrigerator()];

appliance.forEach((item) => item.turnOn());
appliance.forEach((item) => item.turnOff());

// Задание 4
// Абстрактный класс Account
// Создайте абстрактный класс `Account` с абстрактными методами `deposit(amount: number)` и `withdraw(amount: number)`.
// Реализуйте классы `SavingsAccount` и `CheckingAccount`, которые наследуют `Account`.
// В классе `SavingsAccount` добавьте логику для начисления процентов на остаток.
// В классе `CheckingAccount` реализуйте снятие средств с учетом комиссии.
// Проверьте работу методов на объектах обоих классов.

abstract class Account {
  abstract deposit(amount: number): number;
  abstract withdraw(amount: number): number;
}
class SavingsAccount extends Account {
  constructor(
    protected balance: number = 0,
    public rate: number,
  ) {
    super();
  }
  deposit(amount: number = 0): number {
    return (this.balance += amount);
  }
  applyInterest(): number {
    this.rate = 5;
    return (this.balance += (this.balance * this.rate) / 100);
  }
  withdraw(amount: number): number {
    if (amount <= 0) {
      throw new Error('Amount must be greater than zero');
    }
    if (amount > this.balance) {
      throw new Error('Amount must be less than balance');
    }
    return (this.balance -= amount);
  }
  get getBalance(): number {
    return this.balance;
  }
}
class CheckingAccount extends Account {
  constructor(protected balance: number = 0) {
    super();
  }
  deposit(amount: number = 0): number {
    return (this.balance += amount);
  }
  withdraw(amount: number): number {
    const comission: number = amount * 0.02;
    if (amount <= 0) {
      throw new Error('Amount must be greater than zero');
    }
    if (amount > this.balance + comission) {
      throw new Error('Amount must be less than balance + comission');
    }
    return (this.balance -= amount + comission);
  }
  get getBalance(): number {
    return this.balance;
  }
}

const savingAccount = new SavingsAccount(400, 5);
console.log('Opening balance SavingsAccount: ', savingAccount.getBalance);
savingAccount.deposit(300);
console.log('Balance after a deposit: ', savingAccount.getBalance);
savingAccount.applyInterest();
console.log(
  'Balance after interest is accrued on the balance: ',
  savingAccount.getBalance,
);
savingAccount.withdraw(200);
console.log('Balance withdrawal: ', savingAccount.getBalance);

const checkingsAccount = new CheckingAccount(100);
console.log('Opening balance CheckingAccount: ', checkingsAccount.getBalance);
checkingsAccount.deposit(2000);
console.log('Balance after a deposit: ', checkingsAccount.getBalance);
checkingsAccount.withdraw(400);
console.log(
  'Balance after a cash withdrawal with a fee: ',
  checkingsAccount.getBalance,
);

// Задание 5
// Абстрактный класс Media
// Создайте абстрактный класс `Media` с абстрактным методом `play()`.
// Затем создайте классы `Audio` и `Video`, которые наследуют `Media` и реализуют метод `play()` по-своему (например, `Audio` выводит "Playing audio", а `Video` — "Playing video").
// Создайте массив типа `Media[]`, включающий объекты `Audio` и `Video`, и вызовите метод `play()` для каждого элемента массива.

abstract class Media {
  abstract play(): void;
}

class Audio1 extends Media {
  play(): void {
    console.log('Playing audio');
  }
}
class Video extends Media {
  play(): void {
    console.log('Playing video');
  }
}

const medias: Media[] = [new Audio1(), new Video()];

medias.forEach((item) => item.play());
