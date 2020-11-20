let ulPos = document.getElementById('list-possibility')

possibilities.forEach(function (item) {
  let li = document.createElement('li')
  const list = item.list

  /*list */

  function listProgram() {
    let b
    if (list.length != 0) {
      for (let i = 0; i < list.length; i++) {
        if (i > 0) {
          b += list[i].innerHTML = `
            <li class="list--accordion__item"> <span class="list--accordion__counter"> 
            ${i + 1}.</span>${list[i]}</li>`
        } else
          b = list[i].innerHTML = `
            <li class="list--accordion__item"> <span class="list--accordion__counter"> 
            ${i + 1}.</span>${list[i]}</li>`
      }
      return b
    }
    return list
  }

  li.innerHTML = `
  <div class="top">
    <div> ${item.title}</div> <span class="open">+</span>
  </div>
 
    <div class="bottom">
      <div class="bottom--inner">
      <p> ${item.subtitle} </p>
      <ul class="list--accordion">
        ${listProgram()}
      </ul>
      </div>
  </div>
  `

  ulPos.appendChild(li)
})
