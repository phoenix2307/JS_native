// const getServerData = {
//     getData() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 // resolve(`some data`)
//                 reject('some error')
//             }, 1000)
//         })
//     }
// }
//
// const promise = getServerData.getData()

// function someFunc (num){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             rej('aaaaaaa')
//             // num > 5
//             //     ? res(()=>{
//             //         return console.log('num is correct')})
//             //     : rej(()=>{
//             //         return console.log('num is wrong')})
//         }, 1000)
//     })
// }
//
// someFunc(3)
//     .then((data)=>console.log(data))
//     .catch(data=>console.log(data))
//     .finally(()=>{
//         console.log('Clear args  of function')
//     })
//
//
//
//
// const p = Promise.reject();
// p.then(() => console.log('ok'));
// p.catch(() => console.log('error'));

/*  Задачки по Promise  from  https://habr.com/ru/companies/otus/articles/686670/*/


// #1
// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// })
//
// console.log('end');


// #2
// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })
//
// promise1.then(res => {
//     console.log(res)
// })
//
// console.log('end');


// #3
// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
//     console.log(3)
// })
//
// promise1.then(res => {
//     console.log(res)
// })
//
// console.log('end');
//

// # 4
// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1)
// })
//
// promise1.then(() => {
//     console.log(2)
// })
//
// console.log('end');
//

// #5
//
// console.log('start')
//
// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1);
//     resolve('success')
// }))
//
// console.log('middle')
//
// fn().then(res => {
//     console.log(res)
// })
//
// console.log('end')


// #6

// console.log('start')
//
// Promise.resolve(1)
//     .then((res) => {
//     console.log(res)
// })
//
// Promise.resolve(2)
//     .then((res) => {
//     console.log(res)
// })
//
// console.log('end')


// # 7
// console.log('start')
//
// setTimeout(() => {
//     console.log('setTimeout')
// })
//
// Promise.resolve()
//     .then(() => {
//     console.log('resolve')
// })
//
// console.log('end')




// #8

// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     setTimeout(() => {
//         console.log("timerStart");
//         resolve("success");
//         console.log("timerEnd");
//     }, 0);
//     console.log(2);
// });
//
// promise.then((res) => {
//     console.log(res);
// });
//
// console.log(4);



// #9
//
// const timer1 = setTimeout(() => {
//     console.log('timer1');
//
//     const promise1 = Promise.resolve()
//         .then(() => {
//         console.log('promise1')
//     })
//     console.log('timer1-1');
//     promise1.then(()=> console.log('promise2'))
// }, 0)
//
// const timer2 = setTimeout(() => {
//     console.log('timer2')
// }, 0)



// #10

// const promise1 = Promise.resolve().then(() => {
//     console.log('promise1');
//     const timer2 = setTimeout(() => {
//         console.log('timer2')
//     }, 0)
// });
//
// const timer1 = setTimeout(() => {
//     console.log('timer1')
//     const promise2 = Promise.resolve().then(() => {
//         console.log('promise2')
//     })
// }, 0)
//
// console.log('end');

