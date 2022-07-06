const students = [
  {
    id: 1,
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85
  },
  {
    id: 2,
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 90
  },
  {
    id: 3,
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    id: 4,
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100
  },
  {
    id: 5,
    name: "Helen",
    age: 20,
    isMarried: false,
    scores: 110
  },
  {
    id: 6,
    name: "Ann",
    age: 20,
    isMarried: false,
    scores: 105
  }
];

let st = students.reduce( (acc, el)=>{
  acc[el.id] = {...el}
  delete acc[el.id].id
  return acc
}, {} )
console.log(st)

let stName = students.reduce( (acc, el)=> {
  acc[el.name] = {...el}
  delete acc[el.name].name
  delete acc[el.name].id
  return acc
}, {} )

console.log(stName)
console.log(stName.Nick.isMarried)
