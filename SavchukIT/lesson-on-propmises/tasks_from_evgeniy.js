function delay(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`resolve in ${time / 1000} sec`)
        }, time)
    })
}

delay(2000).then(data => alert(data))
delay(5000).then(data => console.log(data))