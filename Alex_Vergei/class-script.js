
//=============================== BASE SYNTAX ===================================

// class User {
//     age = 23
//     someFunc = () => {
//
//     }
//     constructor(name) {
//         this.name = name
//     }
//
//     sayHi() {
//          console.log(this.name)
//     }
// }
//
// const user = new User('Alex')
// console.log(user)


// function User (name) {
//     this.name = name
// }
//
// User.prototype.sayHi = function () {
//     console.log(this.name)
// }


//======================== NOT CLEAN SUGAR ==== ВІДМІННОСТІ ВІД ФУНКЦІЙ ===================

//typeof Classes is FUNCTION

//1 [[isClassConstructor]] ---> can not call without keyword new
// class Test {}
//
// Test() ---> викине помилку (якщо створювати через конструктор і так викликати, то this --> undefined --> window)
// new Test() ---> this ---> {}

//2 string representation
//
// class Test {}
// function User() {}
//
// console.log(Test)
// console.log(User)

//3 inside classes ---> use strict (default)

//4 усі методи класів є неперечисляємими ( дивитись дескріптори властивостей (enumerable))


//========================== STATIC METHODS AND PROPs =================================

// class Test {
//
//     defaultName = 'Default' // to object, not prototype! знаходиться в екзкмплярі класа
//
//     static DEFAULT_NAME = 'Default' // to prototype знаходиться в прототипі класа, недоступні ззовні при зверненні через крапку
//     static hi = function () {       // to prototype
//         console.log('Hi')
//     }
// }
//
// const test = new Test()
//
// console.log(test)
// console.log(test.hi) //undefined


//============================== PRIVATE FIELD ========================================

// class User {
//     #name; // приватність, можна дістати тільки для роботи всередині самого класа
//     constructor(name) {
//         this.#name = name
//     }
//
//     getName() {
//         return this.#name
//     }
// }
//
// const alex = new User('Alex')
//
// // console.log(alex.#name) --- Error
//
// // console.log(alex.getName()) --- Alex

//================================ GET, SET =========================================

// class User {
//     #name; // приватність, можна дістати тільки для роботи всередині самого класа
//     constructor(name) {
//         this.#name = name
//     }
//
//     getName() {
//         return this.#name
//     }
//
//     setName(value) {
//         return this.#name = value
//     }
//
//     // гетери та сетери
//
//     get name() {
//         console.log('GETTER')
//         return this.#name
//     }
//
//     set name(value) {
//         return this.#name = value
//     }
// }
//
// const alex = new User('Alex')
//
// // alex.setName('New name')
// alex.name = 'New setter name' // with setter
// //
// // console.log(alex.getName())
// console.log(alex.name) // with getter


//============================== EXTENDS in Constructors ==================================

// // constructor Car
// function Car () {}
//
// Car.prototype.run = function () {
//     console.log(`${this.model} is running`)
// }
// //
//
// // constructor Ford
// function Ford (model){
//     this.model = model
// }
// Ford.prototype.fordRun = function (){
//     console.log('Ford is running')
// }
//
// // extend prototype from Car to Ford
//
// Ford.prototype.__proto__ = Car.prototype
//
// const mondeo = new Ford('Mondeo')
//
// mondeo.fordRun() //extend method from Ford
// mondeo.run() //extend method from Car

//============================== EXTENDS IN CLASSES ===========================

// // class Car
// class Car {
//     run() {
//         console.log(`Car is running`)
//     }
// }
// //
//
// // class Ford
// class Ford extends Car { // формує два зв'язки --> ( Ford.prototype.__proto__ = Car.prototype ) + ( Ford.prototype.__proto__ = Car)
//     fordRun() {
//         console.log('Ford is running')
//     }
// }
//
//
// const mondeo = new Ford('Mondeo')
//
// mondeo.fordRun() //extend method from Ford
// mondeo.run() //extend method from Car

//==================================== SUPER ========================================

class Car {
    engine = 'diesel'
    constructor(model) {
        //this {}
        //return this
        this.model = model
    }
    showModel() {
        console.log(this.model)
    }

}

class Ford extends Car {
    constructor(model) {
        super(model);//запускає constructor Car отримує від нього this по екстенду (об'єкт {})
        console.log(this.model)
        this.model = model
    }

    showModel() {
        super.showModel();
    }
}

const ford = new Ford('Mondeo')
console.log(ford.engine)
console.log(ford.model)
