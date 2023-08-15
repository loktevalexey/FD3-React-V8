var Car = /** @class */ (function () {
    function Car(_num) {
        this.num = _num;
    }
    Car.prototype.show = function () {
        console.log("car num=" + this.num);
    };
    return Car;
}());
var House = /** @class */ (function () {
    function House(_num, _flats) {
        this.num = _num;
        this.flats = _flats;
    }
    House.prototype.show = function () {
        console.log("house num=" + this.num + " flats=" + this.flats);
    };
    return House;
}());
// у объекта класса House есть все свойства и методы, 
// которые есть в классе Car
// а также "лишнее" свойство flats
// мы можем присвоить его переменной класса Car, 
// преобразование типа не требуется
var car1 = new House(21, 9 * 4);
car1.show(); // вызовется show класса House
console.log('car1 это Car?', car1 instanceof Car);
console.log('car1 это House?', car1 instanceof House);
var carObj = {
    num: 2870,
    speed: 100,
    show: function () {
        console.log("carObj num=" + this.num);
    }
};
// у объекта carObj есть все свойства и методы, которые есть 
// в классе Car
// а также "лишнее" свойство speed
// мы можем присвоить его объекту класса Car, 
// преобразование типа не требуется
var car2 = carObj;
car2.show(); // вызовется show объекта carObj
console.log('car2 это Car?', car2 instanceof Car);
console.log('car2 это House?', car2 instanceof House);
// мы НЕ можем присвоить объекту класса Car объект класса,
// не имеющий всех свойств и методов класса Car,
// даже если применим явное преобразование типа
var trainObj = {
    speed: 100,
};
// let car3:Car=<Car>trainObj; // ошибка
//# sourceMappingURL=app.js.map