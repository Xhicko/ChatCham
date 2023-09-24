const loginTab = document.getElementById('login-tab')
const registerTab = document.getElementById('register-tab')
const loginWrap = document.getElementById('Login_wrapper')
const registerWrap = document.getElementById('Register_wrapper')

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active')
    registerTab.classList.remove('active')
    loginWrap.style.display = 'flex'
    registerWrap.style.display = 'none'
});

registerTab.addEventListener('click', () => {
    loginTab.classList.remove('active')
    registerTab.classList.add('active')
    loginWrap.style.display = 'none'
    registerWrap.style.display = 'flex'
});


const videoWrapper = document.querySelector('.Video_Card')

let grabbed = false
let startX = 0

videoWrapper.addEventListener('mousedown', (e)=>{
    grabbed = true
    startX = e.clientX
    this.style.cusor = 'grabbing'
})

videoWrapper.addEventListener('mouseleave', ()=>{
    grabbed = false
})

window.addEventListener('mouseup', ()=>{
    grabbed = false
    videoWrapper.style.cusor = 'grab'
})

videoWrapper.addEventListener('mousemove', (e)=>{
    if(!grabbed){
        return
    }

    this.scrollLeft += startX - e.clientX
})



