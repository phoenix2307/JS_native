/*
* Зробити запит на API 'https://jsonplaceholder.typicode.com/users',
* щоб отримати доступ до массиву з 10-ох юзерів і вивести його
* у списку на екран. Додати інпут, при введені тексту в інпут список
* імен динамічно міняється і відображаються тільки відповідні імена
* */

async function fetchUsers() {
    const promiseUsers = await fetch('https://jsonplaceholder.typicode.com/users')
    return promiseUsers.json()
}

async function renderList() {

    const users = await fetchUsers() //створити умову при якій ми дочекаємось від серверу отримання users

    const ul = document.querySelector('.users-list') // приєднуємо наш верстку до існуючого тегу з певним класом
    users.map(item => {
        const li = document.createElement('li')
        li.classList.add('users-list-item')
        li.innerHTML = item.name
        ul.appendChild(li)
    })
    // for (const user of users) {
    //     const li = document.createElement('li')
    //     li.classList.add('user-list-item')
    //     li.innerHTML = user.name
    //     ul.appendChild(li)
    // }
}

function filterUsers(e) {
    // добираємось до псевдомасиву елементів з юзерами
    const usersListItems = document.getElementsByClassName('users-list-item')
    //якщо поле вводу пусте, то видалити клас hidden у всіх елементів
    if (e.target.value === 0) {
        [...document.getElementsByClassName('hidden')].forEach((item)=>{
            item.classList.remove('hidden')
        })
        return // перервати роботу функції
    }
    // Якщо наповнення/текст елемента не починається з тих символів, що приходять
    // в e.target.value (з інпута), то ми приховуємо цей елемент
    for (const user of usersListItems) {
        if(!user.innerHTML.startsWith(e.target.value)){
            user.classList.add('hidden')
        } else {
            user.classList.remove('hidden')
        }
    }
}

renderList()

document.querySelector('.input').addEventListener('keyup', filterUsers)