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
