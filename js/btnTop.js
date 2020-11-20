var scrollToTopBtn = document.querySelector('.scrollToTopBtn')
var rootElement = document.documentElement
var TOGGLE_RATIO = 0.1

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if (rootElement.scrollTop / scrollTotal > TOGGLE_RATIO) {
    scrollToTopBtn.classList.add('showBtn')
  } else {
    scrollToTopBtn.classList.remove('showBtn')
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
scrollToTopBtn.addEventListener('click', scrollToTop)
document.addEventListener('scroll', handleScroll)
