// const fetch = require('node-fetch')
import fetch from "node-fetch";


// const fetchLib = {
//     getData() {
//         return new Promise((res, rej) => {
//             const data = 'json'
//             if (data){
//                 res(data)
//             } else {
//                 rej('error')
//             }
//         })
//     }
// }
//
// fetchLib.getData().then(data => console.log(data))
//
// const promise2 = new Promise((resolve, reject)=>{
//     const data = 'someThing'
//     // const data = undefined
//     data ? resolve(data) : reject('error')
// })
// promise2
//     .then(data=>console.log(data))
//     .catch(error => {
//         console.log(error)
//     })

// fetch('https://www.google.com/?query=js')
//     .then((res) => {
//         console.log(`data Google in  ${res.url}`)
//     })

/*-----------ASYNC-AWAIT----------------------*/

//
// fetch('https://www.google.com/?query=js')
//     .then((data) => {
//         console.log(`data from Google: ${data.url}`)
//         return fetch('https://developer.mozilla.org/ru/docs/Web/JavaScript')
//     })
//     .then((data) => {
//         console.log(`data from Mozzila: ${data.url}`)
//         return fetch('https://ru.search.yahoo.com/')
//     })
//     .then(data => console.log(`data from Yahoo: ${data.url}`))


// const data = async () => {
//     try {
//         await fetch('https://www.google.com/?query=js')
//             .then((data) => console.log(`data from Google: ${data.url}`))
//         await fetch('https://developer.mozilla.org/ru/docs/Web/JavaScript')
//             .then((data) => console.log(`data from Mozzila: ${data.url}`))
//         await fetch('https://search.yahoo.com/')
//             .then(data => console.log(`data from Yahoo: ${data.url}`))
//     } catch (error) {
//         console.log('error')
//     } finally {
//         console.log('finally')
//     }
// }
// data();

/*--------------STATIC METHODS-----------------*/

/* ---- all - race - any - allSettled ---*/
// ці методи призначені для опрацювання всіх промісів

// ALL
//
// const pr1 = fetch('https://www.google.com/?query=js')
// const pr2 = fetch('https://developer.mozilla.org/ru/docs/Web/JavaScript')
// const pr3 = fetch('https://search.yahoo.com/')
//
// const bigPr = Promise.all([pr1, pr2, pr3])
//
// Promise.all([
//     // черга виконання промісів
//     fetch('https://www.google.com/?query=js'),
//     fetch('https://developer.mozilla.org/ru/docs/Web/JavaScript'),
//     fetch('https://search.yahoo.com/')
// ])
//     // .then((data) => console.log(data))
//     .then((data) => console.log(data.map(i => i.url)))
//     .catch((error) => console.log(error.message))

// RACE
// Promise.race([
//     // виконується перший проміс який змінив найшвидше свій стан pending (resolve or reject)
//     fetch('https://www.google.com/?query=js'),
//     fetch('https://developer.mozilla.org/ru/docs/Web/JavaScript'),
//     fetch('https://search.yahoo.com/')
// ])
//     .then((data) => console.log(data.url))
//     .catch((error) => console.log(error.message))
//

// ANY
//
// Promise.any([
//     // виконується перший проміс який змінив найшвидше свій стан pending на resolve!!!
//     fetch('https://www.google.com/?query=js'),
//     fetch('https://developer.mozilla.org/ru/docs/Web/JavaScript'),
//     fetch('https://search.yahoo.com/')
// ])
//     .then((data) => console.log(data.url))
//     .catch((error) => console.log(error.message))

// ALLSETTLED

Promise.allSettled([
    // ніколи не потрапляє в CATCH
    //Метод Promise.allSettled() возвращает промис,
    //который исполняется когда все полученные промисы завершены (исполнены или отклонены),
    // содержащий массив результатов исполнения полученных промисов.
    fetch('https://www.google.com/?query=js'),
    fetch('https://developer.mozilla.org/ru/docs/Web/JavaScript'),
    fetch('https://search.yahoo.com/')
])
    .then((data) => console.log(data.map(i => i.status)))
    .catch((error) => console.log(error.message))