// Events

const small = document.getElementById('small')
const medium = document.getElementById('medium')
const big = document.getElementById('big')

function handler(e) {
    console.log(e.target, ':', e.currentTarget)
}

small.addEventListener('click', handler)
medium.addEventListener('click', handler)
big.addEventListener('click', handler)

