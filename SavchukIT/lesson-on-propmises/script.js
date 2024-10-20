/*
console.log('ok')

const promise1 = new Promise((resolve, reject) => {
    const isUserLogIn = true
    if (isUserLogIn) {
        setTimeout(() => resolve('User is logged in'), 2000)
    } else {
        setTimeout(() => reject('Invalid data'), 2000)
    }
})

promise1
    .then((data) => console.log(data))
    .catch(error => console.log(error))

console.log(promise1)

*/

// 1. Функція приймає id користувача, та повертає об'єкт із JSON-placeholder за своїм id
// 2. Потім іншою функцією повертаємо новий об'єкт {id: 5, userName: 'Alex', posts: [1, 2, 3, ...]}


//==========================My Solution===============================================
// Не можу вивести у підсумковий return цей об'єкт поза асинхронним кодом. Але обєкт сформувати вдалося

const getPosts = (id) => {
    let userPosts = {
        id,
        name: 'Alex',
        posts: [1, 2, 3]
    }
    const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
    const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')

    usersPromise
        .then(response => response.json())
        .then(users => {
            user = users.find(el => el.id === id)
            return userPosts.name = user.name
        })

    postsPromise
        .then(response => response.json())
        .then(posts => {
            return userPosts.posts = posts.filter(p => p.userId === id)
        })

    return userPosts
}

getPosts(3)

//==========================-----------------------author's solution----------===============================================//

const getPosts_2 = (id) => {
    const endpoint = 'https://jsonplaceholder.typicode.com'
    const result = {id, name: '', posts: []}

    return new Promise((resolve, reject) => {
        fetch(`${endpoint}/users`)
            .then(response => response.json())
            .then(users => {
                const foundUser = users.find(u => u.id === id)
                result.name = foundUser.name
                fetch(`${endpoint}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        const foundPosts = posts.filter(p => p.userId === id)
                        result.posts = foundPosts
                        resolve(result)
                    })
            })
    })


}
getPosts_2(12).then(data => console.log(data))

// console.log(getPosts_2(4), getPosts(5))