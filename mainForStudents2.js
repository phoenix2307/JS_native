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
console.log(user === copyUser)
console.log(user.friends === copyUser.friends)

//Проверка:
// console.log(user===copyUser)- что должно быть в консоли?
// console.log(user.friends===copyUser.friends)- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};
console.log(user === deepCopyUser)
console.log(user.friends === deepCopyUser.friends)

//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли?
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents = [...students];
console.log(students.length === copyStudents.length)
console.log(students === copyStudents)
console.log(students[0].name === copyStudents[0].name)
console.log(students[2].age === copyStudents[2].age)
console.log(students[1].isMarried === copyStudents[1].isMarried)
console.log(students[0] === copyStudents[0])
console.log('--------------')

//Проверка:
// console.log(код проверки написать самостоятельно ) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(s => {
  return {...s}
});
console.log(students === deepCopyStudents)
console.log(students[0].name === deepCopyStudents[0].name)
console.log(students[2].age === deepCopyStudents[2].age)
console.log(students[1].isMarried === deepCopyStudents[1].isMarried)
console.log(students[0] === deepCopyStudents[0])


//Проверка:
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль
console.log('--5555--')
//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let copyDeepCopyStudents = [...deepCopyStudents]
let sortedByName = copyDeepCopyStudents.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = copyDeepCopyStudents.sort((a, b) => a.scores < b.scores ? 1 : a.scores > b.scores ? -1 : 0);
console.log(sortedByScores);
console.log(copyDeepCopyStudents)
console.log(deepCopyStudents)

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
console.log('-- 6 --')
let copy6 = [...deepCopyStudents]
let bestStudents = copy6.filter(st => st.scores >= 100)
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
console.log('-- 6a --')
let topStudents = deepCopyStudents.sort((a, b) => a.scores < b.scores ? 1 : a.scores > b.scores ? -1 : 0).splice(0, 3)
;
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
console.log('-- 7 --')
let copy7 = students.map(s => {
  return {...s}
});
let notMarriedStudents = copy7.filter(s => !s.isMarried);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
console.log('-- 8 --')
let studentsNames = students.map(s => s.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(' ');
console.log(namesWithSpace)
let namesWithComma = studentsNames.join(',');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(st => ({...st, isStudent: true}));
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
console.log('-- 10 --')
let studentsWithMarriedNick = students.map(st => st.name === 'Nick' ? {...st, isMarried: true} : st)
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(st => st.name === 'Ann');
console.log(ann)
console.log(students)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = students.reduce((acc, cur) => acc.scores > cur.scores ? acc : cur, 0);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
// И поднимаем руку!!!!

let scoresSum = students.reduce((a, c) => a + c.scores, 0);
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
console.log('-- 14 --')
const addFriends = (students) => {
  const names = students.map(st => st.name)
  return students.map(st => ({...st, friends: names.filter(n => n !== st.name)}))
  //..............................
}
console.log(addFriends(students));









