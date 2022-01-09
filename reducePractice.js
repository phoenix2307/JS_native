const todoList_Id1 = 'sdf-sdf-1'
const todoList_Id2 = 'sf-sdf-2'
const todoList = [
  {
    id: todoList_Id1,
    title: "What to learn",
    filter: 'all'
  },
  {
    id: todoList_Id2,
    title: "What to buy",
    filter: 'all'
  }

]

const tasks = {
  [todoList_Id1]: [
    {id: 'qw-wwr', title: 'html', isDone: true},
    {id: 'qgh-wwr', title: 'css', isDone: false},
    {id: 'erw-wwr', title: 'react', isDone: true}
  ],
  [todoList_Id2]: [
    {id: 'hj-wwr', title: 'milk', isDone: true},
    {id: 'prv-wwr', title: 'bread', isDone: false},
    {id: 'app-wwr', title: 'cheese', isDone: true}
  ]

}

/*
console.log(tasks[todoList_Id1].filter(t => t.title === 'html'))
console.log([...tasks[todoList_Id1], {id: 'app-wwr', title: 'cheese', isDone: true}])
console.log([...tasks[todoList_Id1]] === tasks[todoList_Id1])
console.log(
  {
    ...tasks,
    [todoList_Id1]:
      [...tasks[todoList_Id1], {id: 'hj-wwr', title: 'milk', isDone: true}]
  })
*/

// reduce

const nums = [1,2,3, 8, 4,5]
console.log(nums.reduce((sum, el)=> sum * el))

let sum = 0
for (let i=0; i<nums.length; i++){
  sum += nums[i]
}
console.log(sum)

console.log(nums.reduce( (res, el) => res > el ? res : el ))

const people = [
  {
    name: 'Nika',
    age: 12,
    isMarried: false,
    score: 25
  },
  {
    name: 'Alex',
    age: 41,
    isMarried: true,
    score: 100
  },
  {
    name: 'Natalie',
    age: 38,
    isMarried: true,
    score: 75
  }
]
console.log(people.reduce( (best, el) => best.score > el.score ? best : el, 0))
console.log(typeof people[0].score)
console.log('********************')



// аналог map()
// измнение свойства в каждом объекте массива
console.log(people.map( el =>{
  return {...el, score:  el.score + 10 }
}   ))

console.log(people.reduce( (arr, el) => arr.concat({...el, score: el.score + 10}), [] ))

//
console.log(people.reduce((data, el) => {
  data[el.name] = [el.age, el.score]
  return data
}, {}))

console.log(people.reduce((data, el) => {
  data[el.name] = el.score
  return data
}, {}))

console.log('---------------------------')
//через for()
let data = {}
for (let i = 0; i < people.length; i++) {
  data[people[i].name] = people[i].score
}
console.log(data)
// data[el.name] - это свойство нового объекта
//  = [el.age, el.score] - присваиваем этомц свойсту значение: массив с выбранными элементами
// return data - возвращаем результат



