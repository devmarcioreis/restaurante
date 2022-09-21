const header = document.querySelector('.navbar')
const openNavBtn = document.querySelector('#nav-open')
const closeNavBtn = document.querySelector('#nav-close')
const navLink = document.querySelector('.nav-links')

const openNav = () => {
    header.style.display = 'flex'
    openNavBtn.style.display = 'none'
    closeNavBtn.style.display = 'inline-block'
}
openNavBtn.addEventListener('click', openNav)

const closeNav = () => {
    header.style.display = 'none'
    openNavBtn.style.display = 'inline-block'
    closeNavBtn.style.display = 'none'
}
closeNavBtn.addEventListener('click', closeNav)



