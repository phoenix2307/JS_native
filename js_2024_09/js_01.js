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
        isMarried: false,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: true,
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
        isMarried: true,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    }
];

const primitiveArray = ['a', 'b', 's', 'r', 'w']
// const otherStudents = [
//     {
//         name: "Helen",
//         age: 20,
//         isMarried: false,
//         scores: 110
//     },
//     {
//         name: "Ann",
//         age: 20,
//         isMarried: false,
//         scores: 105
//     }
// ]

console.log(students)

// const getNameForStudents = (arr) => {
//     let listOfNames = []
//     for (let i = 0; i < arr.length; i++) {
//         listOfNames = [...listOfNames, arr[i].name]
//     }
//     return listOfNames
// }

const getNameForStudents = (arr) => {
    let result = []
    const getName = el => el.name
    for (let i = 0; i < arr.length; i++) {
        result[i] = getName(arr[i])
    }

    return result
}

const listON = getNameForStudents(students)

console.log(listON)

const average = (arr) => {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].scores
    }
    return result / 4
}

console.log(average(students))

const mappedArray = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result
}

console.log('----------------MAPPED-----------------')

console.log(mappedArray(students, st => st.name))
console.log(mappedArray(students, st => st.scores))
console.log(mappedArray(students, st => st.age))

console.log('-------------FILTER-------------------')

const filteredArray = (arr, filterFunc) => {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (filterFunc(arr[i]) === true) {
            result[result.length] = arr[i]
        }
    }
    return result
}

console.log(filteredArray(students, st => st.age > 20))
console.log(filteredArray(students, st => st.isMarried))


console.log('----------------FIND---------------------')

const findElement = (arr, findFunc) => {
    for (let i = 0; i < arr.length; i++) {
        if (findFunc(arr[i]) === true) {
            return arr[i]
        }
    }
}

console.log(findElement(students, st => st.name === 'Bob'))

console.log('-------------PUSH-----------------')

const pushElement = (arr, el) => {
    arr[arr.length] = el
    return arr.length
}

console.log(pushElement(students, {
    name: "Nika",
    age: 15,
    isMarried: false,
    scores: 110
}))


const listON_2 = getNameForStudents(students)
console.log(listON_2)


console.log('-------------IndexOF-----------------')


const getIndex = (arr, el,startPosition = 0) => {
    for (let i = startPosition; i < arr.length; i++) {
        if (arr[i] === el) {
            return i
        }
    }
    return -1
}

console.log(getIndex(primitiveArray, 'w' ))


console.log('--------------Includes------------------')

const isTrueElement = (arr, el, startPosition = 0) => {
    for (let i = startPosition; i < arr.length; i++) {
        if (arr[i] === el){
            return true
        }
    }
    return false
}

console.log(isTrueElement(primitiveArray, 'b', 2))

console.log('--------------Upgrade Array.prototype---------------------------')

function getLength() {
    return `length of array = ${this.length}`
}

Array.prototype.getLeng = getLength

console.log(students.getLeng())