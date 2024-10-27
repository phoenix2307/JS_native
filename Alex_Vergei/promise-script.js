//imitation how made Promise

const strictFather = {
    getMoney() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const goodGirl = true
                if (goodGirl === true) {
                    resolve(`Nika, your count + 1000 UAH`)
                } else reject(`Nika, you are bad girl`)
            }, 2000)
        })
    }
}

const nika = strictFather.getMoney()

const nikaPromise = nika
    .then((result) => {
        console.log('in then')
        console.log(result)
    })
    .catch((err) => {
        console.log('in catch')
        console.log(err)
    })
    .finally(() => {
        console.log('in finally')
    })

console.log(nikaPromise)