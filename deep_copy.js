// links to watch theory
// https://www.youtube.com/watch?v=6napu-MGQDo&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=47
// https://www.youtube.com/watch?v=I8LNJpG60vI&feature=youtu.be

// 1. Simple object
let man = {
  name: 'John',
  age: 28
};

let manFullCopy = {...man}
console.log(man === manFullCopy)

// 2. Array of primitives
let numbers = [1, 2, 3];

let numbersFullCopy = [...numbers]
console.log(numbers === numbersFullCopy)


// 3. Object inside an object
let man1 = {
  name: 'John',
  age: 28,
  mother: {
    name: 'Kate',
    age: 50
  }
};

let man1FullCopy = {
  ...man1,
  mother: {...man1.mother}
}

console.log(man1.mother === man1FullCopy.mother)
console.log(man1.mother.name === man1FullCopy.mother.name)


// 4. Array of primitives inside an object
let man2 = {
  name: 'John',
  age: 28,
  friends: ["Peter", "Steven", "William"]
};

let man2FullCopy = {...man2, friends: [...man2.friends]}
console.log(man2.friends === man2FullCopy.friends)
console.log(man2.friends[0] === man2FullCopy.friends[0])

// 5 Array of objects
console.log('-- 5 --')
let people = [
  {name: "Peter", age: 30},
  {name: "Steven", age: 32},
  {name: "William", age: 28}
];


let peopleFullCopy = people.map(i => ({...i}))

console.log(people[1] === peopleFullCopy[1])
console.log(people[1].name === peopleFullCopy[1].name)


// 6 Array of objects inside object
let man3 = {
  name: 'John',
  age: 28,
  friends: [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
  ]
};

let man3FullCopy = {
  ...man3,
  friends: man3.friends.map(i => ({...i}))
}

console.log(man3.friends[2] === man3FullCopy.friends[2])
console.log(man3.friends[2].age === man3FullCopy.friends[2].age)


// 7 Object inside an object, inside an object
console.log('-- 7 --')
let man4 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    }
  }
};

let man4FullCopy = {
  ...man4,
  mother: {
    ...man4.mother,
    work: {...man4.mother.work}
  }
}

console.log(man4.mother === man4FullCopy.mother) // false
console.log(man4.mother.name === man4FullCopy.mother.name) //true
console.log(man4.mother.work === man4FullCopy.mother.work) //false
console.log(man4.mother.work.experience === man4FullCopy.mother.work.experience) //true

// 8 Array of objects inside object -> object
console.log('-- 8 --')
let man5 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    },
    parents: [
      {name: "Kevin", age: 80},
      {name: "Jennifer", age: 78}
    ]
  }
};

let man5FullCopy = {
  ...man5,
  mother: {
    ...man5.mother,
    work: {...man5.mother.work},
    parents: man5.mother.parents.map(i => ({...i}))
  }
}

console.log(man5 === man5FullCopy)//false
console.log(man5.mother === man5FullCopy.mother)//false
console.log(man5.mother.work === man5FullCopy.mother.work)//false
console.log(man5.mother.parents === man5FullCopy.mother.parents)//false
console.log(man5.mother.parents[1].age === man5FullCopy.mother.parents[1].age)//true
console.log(man5.mother.parents[1] === man5FullCopy.mother.parents[1])//false

// 9 Object inside an object -> array -> object ->  object
console.log('-- 9 --')
let man6 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht"
        }
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi"
        }
      }
    ]
  }
};

let man6FullCopy = {
  ...man6,
  mother: {
    ...man6.mother,
    work: {...man6.mother.work},
    parents: man6.mother.parents.map(i => {
      return {...i, favoriteDish: {...i.favoriteDish}}
    })
  }
}
console.log(man6.name === man6FullCopy.name)//true
console.log(man6.mother === man6FullCopy.mother)//false
console.log(man6.mother.age === man6FullCopy.mother.age)//true
console.log(man6.mother.work === man6FullCopy.mother.work)//false
console.log(man6.mother.work.position === man6FullCopy.mother.work.position)//true
console.log('-- 9a --')
console.log(man6.mother.parents === man6FullCopy.mother.parents)//false
console.log(man6.mother.parents[0] === man6FullCopy.mother.parents[0])//false
console.log(man6.mother.parents[0].age === man6FullCopy.mother.parents[0].age)//true
console.log(man6.mother.parents[1].favoriteDish === man6FullCopy.mother.parents[1].favoriteDish)//false
console.log(man6.mother.parents[0].favoriteDish.title === man6FullCopy.mother.parents[0].favoriteDish.title)//true


//10 Array of objects inside an object -> object -> array -> object ->  object
console.log('--*-*-*-*-*-*--   10   --*-*-*-*-*-*--')
let man7 = {
  name: 'John',
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
    work: {
      position: "doctor",
      experience: 15
    },
    parents: [
      {
        name: "Kevin",
        age: 80,
        favoriteDish: {
          title: "borscht",
          ingredients: [
            {title: "beet", amount: 3},
            {title: "potatoes", amount: 5},
            {title: "carrot", amount: 1}
          ]
        }
      },
      {
        name: "Jennifer",
        age: 78,
        favoriteDish: {
          title: "sushi",
          ingredients: [
            {title: "fish", amount: 1},
            {title: "rise", amount: 0.5}
          ]
        }
      }
    ]
  }
};

let man7FullCopy = {
  ...man7,
  mother: {
    ...man7.mother,
    work: {...man7.mother.work},
    parents: man7.mother.parents.map(i => {
      return {
        ...i,
        favoriteDish: {...i.favoriteDish, ingredients: i.favoriteDish.ingredients.map(ing => ({...ing}))}
      }
    })
  }
}

console.log(man7===man7FullCopy)//false
console.log(man7.name===man7FullCopy.name)//true
console.log(man7.mother===man7FullCopy.mother)//false
console.log(man7.mother.age===man7FullCopy.mother.age)//true
console.log('----- 10a  -------')
console.log(man7.mother.work===man7FullCopy.mother.work)//false
console.log(man7.mother.work.experience===man7FullCopy.mother.work.experience)//true
console.log(man7.mother.parents===man7FullCopy.mother.parents)//false
console.log(man7.mother.parents[0]===man7FullCopy.mother.parents[0])//false
console.log(man7.mother.parents[1].name===man7FullCopy.mother.parents[1].name)//true
console.log('----- 10b  -------')
console.log(man7.mother.parents[0].favoriteDish===man7FullCopy.mother.parents[0].favoriteDish)//false
console.log(man7.mother.parents[0].favoriteDish.title===man7FullCopy.mother.parents[0].favoriteDish.title)//true
console.log(man7.mother.parents[1].favoriteDish.ingredients===man7FullCopy.mother.parents[1].favoriteDish.ingredients)//false
console.log(man7.mother.parents[0].favoriteDish.ingredients[2]===man7FullCopy.mother.parents[0].favoriteDish.ingredients[2])//false
console.log(man7.mother.parents[1].favoriteDish.ingredients[1].title===man7FullCopy.mother.parents[1].favoriteDish.ingredients[1].title)//true

let a = man7.mother.parents[1].favoriteDish.ingredients[2]//undefined
let b = man7FullCopy.mother.parents[1].favoriteDish.ingredients[2]//undefined
console.log(a)
console.log(b)
console.log(a === b)//true
