function colorApple(n, g, y, r) {

    let apples = []

    while (apples.length < n || apples.length === n || apples.length < 1000 || apples.length === 1000) {

        for (let i = 0; i < g; i++) {
            apples.push('G')
        }

        for (let i = 0; i < y; i++) {
            apples.push('Y')
        }

        for (let i = 0; i < r; i++) {
            apples.push('R')
        }

        for (let i = 0; i < y; i++) {
            apples.push('Y')
        }

        for (let i = 0; i < g; i++) {
            apples.push('G')
        }
    }

    return apples[n-1]
}

console.log(colorApple(1, 1, 3, 4))
console.log(colorApple(2, 1, 3, 4))
console.log(colorApple(12, 1, 3, 4))
console.log(colorApple(13, 1, 3, 4))
console.log(colorApple(20, 1, 3, 4))
console.log(colorApple(1000, 1, 3, 4))