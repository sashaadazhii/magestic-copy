let ulLessons = document.getElementById('list-lessons')

lessons.forEach((item) => {
  let li = document.createElement('li')
  const list = item.list
  const homework = item.homework
  const bonus = item.bonus
  const practice = item.practice

  function listProgram() {
    let b
    for (let i = 0; i < list.length; i++) {
      if (i > 0) {
        b += list[i].innerHTML = `
        <li class="list__item"> <span class="list__counter"> 
        ${i + 1}.</span>${list[i]}</li>`
      } else
        b = list[i].innerHTML = `
        <li class="list__item"> <span class="list__counter"> 
        ${i + 1}.</span>${list[i]}</li>`
    }
    return b
  }

  /*program */
  function listHomework() {
    let b
    for (let i = 0; i < homework.tasks.length; i++) {
      if (i > 0) {
        b += homework.tasks[i].innerHTML = `
        <li class="list__item"> <span class="list__counter"> 
        ${i + 1}.</span>${homework.tasks[i]}</li>`
      } else
        b = homework.tasks[i].innerHTML = `
        <li class="list__item"> <span class="list__counter">
         ${i + 1}.</span>${homework.tasks[i]}</li>`
    }
    return b
  }

  let ad = document.createElement('div')

  function aditional(param) {
    if (param.title != '') {
      ad.innerHTML = `
      <div class="editional">
        <span class="editional__title">
          ${param.title}
        </span>
    
        <span class="editional__content">
          ${param.content}
        </span>
      </div>
      `
    }
    return ad.innerHTML
  }

  li.innerHTML = `
    <div class="top">
      <div> ${item.title}</div> <span class="open">+</span>
    </div>
    <div class="bottom">
      <div class="bottom--inner">
        <ul class="list">
          ${listProgram()}
        </ul>
          ${aditional(practice)}
        <div class="homework">
          <p class="homework__title">
            ${item.homework.title}
          </p>
          <ul class="list">
            ${listHomework()}
          </ul>
        </div>
        ${aditional(bonus)}
      </div>
    </div>
  `
  ulLessons.appendChild(li)
  // divAditional.appendChild(ad)
})
