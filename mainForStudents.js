const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 90
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100
  },
  {
    name: "Helen",
    age: 20,
    isMarried: false,
    scores: 110
  },
  {
    name: "Ann",
    age: 20,
    isMarried: false,
    scores: 105
  }
];

const user = {
  name: "Bob",
  age: 23,
  friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};
// console.log(user===copyUser)
// console.log(user.friends===copyUser.friends)
//Проверка:
// console.log(user===copyUser)- что должно быть в консоли?
// console.log(user.friends===copyUser.friends)- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};
// console.log(user===deepCopyUser)
// console.log(user.friends===deepCopyUser.friends)
//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли?
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents = [...students];
// console.log(students===copyStudents)
// console.log(students[0].name===copyStudents[0].name)

//Проверка:
// console.log(код проверки написать самостоятельно ) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(m => ({...m}));
// console.log(deepCopyStudents===students)
// console.log(deepCopyStudents[2]===students[2])
// deepCopyStudents[2].name = 'Neo'
// console.log(students[2].name)
// console.log(deepCopyStudents[2].name)
//Проверка:
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = deepCopyStudents.sort((a, b) => a.name > b.name ? 1 : -1);
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => a.scores > b.scores ? -1 : 1);
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(item => item.scores >= 100);
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
let topStudents = bestStudents.splice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents;
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = deepCopyStudents.filter(f => !f.isMarried);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = deepCopyStudents.map(item => item.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = studentsNames.join(' ');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(',');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = deepCopyStudents.map(m => ({...m, isStudent: true}));
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = deepCopyStudents.map(m => m.name === "Nick" ? {...m, isMarried: true} : m);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = deepCopyStudents.find(f => f.name === "Ann");
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - не испльзуя методы массивов и Math.max()
let bestStudent = deepCopyStudents.reduce((acc, current)=> acc.scores > current.scores ? acc : current);
console.log(bestStudent)
let bestStudent2 = {};
for (let i = 0; i < deepCopyStudents.length; i++) {
  bestStudent2 = deepCopyStudents[0]
  if (bestStudent2.scores > deepCopyStudents[i].scores) {
    bestStudent2 = bestStudent2
  } else {
    bestStudent2 = deepCopyStudents[i]
  }
}
console.log(bestStudent2)

//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!
// let scoresStudents = deepCopyStudents.map(m => m.scores)
// console.log(scoresStudents)

let scoresSum = deepCopyStudents.reduce((acc, curr)=>  acc + curr.scores, 0);
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {

  return  students.map(m => ({...m, friends: students
      .filter(f => f.name !== m.name)
      .map(m => m.name)}))
}
console.log(addFriends(students));









