let calc = false
let totalValue = 0
let rez = 0
let number

// let numDom = document.getElementById('numDom')
let titleDom = document.getElementById('titleDom')
let output = document.getElementsByClassName('output')[0]
const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  let numDom = document.getElementById('numDom')
  let desc = document.getElementById('desc')
  let prev = document.getElementById('prev')
  let author = document.getElementById('author')

  let day = document.getElementById('day').value
  let month = document.getElementById('month').value
  let year = document.getElementById('year').value

  calc = true
  if (calc === true) {
    output.style.display = 'block'
  } else {
    output.style.display = 'none'
  }
  totalValue = Number(day + month + year)

  let sum = 0

  while (totalValue) {
    sum += totalValue % 10
    totalValue = Math.floor(totalValue / 10)
  }
  rez = sum

  if (rez > 21) {
    if ((sum % 9 || 9) > 21) {
      rez = sum % 9 || 9
      console.log(rez)
    } else {
      rez = (rez % 10) + Math.floor(rez / 10)

      console.log(rez)
    }
  }

  number = numbers.find((num) => num.num === rez)
  numDom.textContent = number.num //number
  titleDom.textContent = ' (' + number.title + ')' //title
  prev.textContent = number.prev
  author.textContent = number.author
  desc.textContent = number.desc

  document.forms['form'].reset()
})
