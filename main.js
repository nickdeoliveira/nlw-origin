window.addEventListener('scroll', onScroll)


onScroll()
function onScroll() {
  ShowBackToTopButtonOnScroll()
  ShowNavOnScroll()
}

function ShowNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function ShowBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('scroll')
  } else {
    backToTopButton.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)
