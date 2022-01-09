const names = ['Bob', 'alex', 'Mike', 'Nick']
const numbers = [12, 34, 4, 56, 200, 55, 42]

// если sort() при получает отрицательное число или ноль, то он этих два сравниваемых элемента массива не будет менять местами, если получаети положительное, то меняет местами сравниваемые числа
// вспомогательная функция сравнивает два числа < или > b и в зависимости от нашей потербности выставляем ей определенный return:

//для возрастания:
// const compareFn = (a, b) => a > b ? 1 : -1
// console.log(numbers.sort(compareFn))
// соорт по убыванию:
const compareFn = (a, b) => a < b ? 1 : -1
console.log(numbers.sort(compareFn))

//сокращенный вариант:
// console.log(numbers.sort((a, b) => b - a))// убывание
// console.log(numbers.sort((a, b) => a - b))// возрастание
console.log('----------------------------------')


const family = [
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
  },
  {
    name: 'alex',
    age: 41,
    isMarried: true,
    score: 100
  },
  {
    name: 'nika',
    age: 12,
    isMarried: false,
    score: 25
  },
  {
    name: 'Nika',
    age: 12,
    isMarried: false,
    score: 35
  }
]

// console.log(family.sort((a, b) => a.score - b.score))//по числам
// console.log(family.sort((a, b) => a.name > b.name ? 1 : -1))//по строкам
console.log('*-*---*-*-')
// console.log([...family].sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))//по строкам копию

const num = [5, 4, 7, 1, 4, 6]

// const sortFn = (arr) => {
//   return arr.sort( (a, b) => a - b )
// }

//пузырьковая сортировка
/*
const sortFn = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let g = 0; g < i; g++) {
      if (arr[i] < arr[g]) {
        let min = arr[i]
        arr[i] = arr[g]
        arr[g] = min
      }
    }
  }
  return arr
}

console.log(sortFn([...num]))
*/
// замена элементов массива местами без присвоения промежуточной переменнойЖ
// [arr[i], arr[i+1]] = [arr[i+1], arr[i]]

// Math.min + do while
/*const sortFn = (arr) => {
  let newArr = []
  do {
    let minNum = Math.min(...arr)
    newArr.push(minNum)
    arr.splice(arr.indexOf(minNum), 1)
  } while (arr.length !== 0)
  console.log(newArr)
}
sortFn(num)*/

// Продвинутый пузырек

const sorting = (arr) => {
  let isSorted
  for (let i = 0; i < arr.length - 1; i++ ){
    isSorted = true;
    for(let g = 0; g < arr.length - 1 -i; g++){
      if(arr[g] > arr[g+1]) {
        isSorted = false;
        [arr[g], arr[g+1]] = [arr[g+1], arr[g]]
      }
    }
    if(isSorted) {
      return arr
    }
  }
}

console.log(sorting(num))

