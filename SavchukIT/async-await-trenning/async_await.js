// Приклад трансформації функції, яка повертає проміс з даними
// на async-await функцію, що повертає нам дані

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => user)
}

/*async function sayHello() {
    const user = await fetchUser()
    console.log(user)
    alert(`Hello ${user.name}`)
}

sayHello()*/

async function sayHello() {
    try {
        const user = await fetchUser()
        console.log(user)
        // alert(`Hello ${user.name}`)
    } catch (error) {
        console.log(error.message)
    }
}

sayHello()

////======================================================================

/*async function fetchUsers() {
    const promiseUsers = await fetch('https://jsonplaceholder.typicode.com/users')
    return promiseUsers.json()
}

async function getUsers() {
    try {
        const users = await fetchUsers()
        users.forEach((item, index) => {
            // Create elements
            const list = document.createElement('ul')
            const listItem = document.createElement('li')
            //
            listItem.innerHTML = item.name
            //
            list.append(listItem)
        })
    } catch (error) {
        console.log(error)
    }
}

getUsers()*/

//=================================================

/*
// Create elements
const list = document.createElement('ul')
const listItem = document.createElement('li')

list.append(listItem)
// get users array
const usersArray = getUsers()
const createUsersList = () => {
    usersArray.map(item => {
        listItem.innerHTML = item.name
    })
}

createUsersList()*/

//
// async function getUsers () {
//     try {
//         const users = await fetchUsers()
//         users.forEach((item, index)=>{
//             // Create elements
//             const list = document.createElement('ul')
//             const listItem = document.createElement('li')
//             //
//             listItem.innerHTML = item.name
//             //
//             list.append(listItem)
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }
//
// getUsers()

//============================================================================================//

