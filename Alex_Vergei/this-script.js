//!use strict ---> this = always some object
//use strict ---> this = any data type (все, що ми закинемо функції в this)

//1. Global scope ----> this = global object (in browser --> window)

//2. function (not arrow !!!!) ---> дивимося де і як визивається функція
    // - за допомогою ключового слова new ---> this = {} (новий об'єкт)
    // - за допомогою методів функції (call, apply, bind) ---> this = те, що ми передаємо аргументом в метод
    // - викликана від імені якогось об'єкта ---> this = те, що знаходиться зліва від крапки
    // - виклик звичайної функції ---> undefined (!use strict ---> window)

//3. arrow function ---> this береться зі скоупа, який вище рівнем