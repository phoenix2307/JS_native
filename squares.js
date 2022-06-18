const sm = document.getElementById('small')
const md = document.getElementById('medium')
const anchor = document.getElementById('anch')

const smallHandler = (e) => {
  console.log(e.currentTarget)
  console.log(e.target)
  console.log(e)
}

// sm.onclick = smallHandler
// sm.onclick = null
function anchorHandler(e){
  e.preventDefault()
  alert('відміна роботи по замовчуванні')
}

md.addEventListener('click', smallHandler)
// sm.removeEventListener('click', smallHandler)

anchor.addEventListener('click', anchorHandler)