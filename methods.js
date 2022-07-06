const arr1 = ['Alex', 'Natalie', 'Nika']
const arr2 = [1, 2, 5, 4, 6, 12, 8]
const arr3 = ['a', 'd', 't', 'b', 'y', 'l', 'q',]
const arr4 = [0, 1, 0, 1, 0, 1, 0, 1]

let arr33 = arr3.slice()

arr1.forEach( (item, index) => {
  console.log(`${index+1}. ${item} = ${item.length} letters`)
} )

arr4.forEach( (items, index,arr)=> {
  console.log(` ${arr.reverse().join('').toUpperCase()} `)
} )

console.log(arr2.reverse())
console.log(arr3.reverse())

const str = 'Alex, Natalie, Nika'
strArr = str.split(', ')
console.log(strArr)
console.log(strArr.join(', '))

function anyFunc(a,b){
  return a + b
}
console.log(arr3.join(`${anyFunc(3,5)}`))
console.log('-*--*--***-*-*-*-*--*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*')

const names = ['Zelensky', 'Biden', 'Boris', 'Alex', 'Mike', 'Natalie', 'Nika', 'Piter']
console.log(names.sort())

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
    name: "alex",
    age: 21,
    isMarried: true,
    scores: 90
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

console.log(students.sort( (a,b) => a.name.localeCompare(b.name)))

const numbers = [13, 14, 2, 25, 6, 102, 45, 38]

for (let k =0; k < numbers.length-1; k++){

  let isSorted = true
  for (let i =0; i < numbers.length-k; i++) {
    debugger
    if(numbers[i] > numbers[i+1]) {
      isSorted = false
      let temp = numbers[i]
      numbers[i] = numbers[i+1]
      numbers[i+1] = temp
    }
  }
  if(isSorted) break
}

console.log('---------------------******************-----------------')
console.log(numbers)