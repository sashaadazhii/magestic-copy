let ul = document.getElementById('list-learning')

learning.forEach(function (item) {
  let li = document.createElement('li')
  li.innerHTML = `
  <div class="top">
    <div> ${item.title}</div> <span class="open">+</span>
  </div>
 
    <div class="bottom">
      <div class="bottom--inner">
      <p> ${item.result} </p>
      </div>
  </div>
  `

  ul.appendChild(li)
})
