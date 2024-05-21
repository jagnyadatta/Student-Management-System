//===========toggle icon navbar==========
function showSidebar(){
    const sidebar = document.querySelector('.navigation ul');
    const menu1 = document.querySelector('.menu1');
    const menu2 = document.querySelector('.menu2');
    const logButton = document.querySelector('.navigation .loginSignin button');
    menu1.style.display = 'none' 
    sidebar.style.display = 'block'
    sidebar.style.transition = '5s'
    menu2.style.display = 'block'
    logButton.style.display = 'none'
}
function hideSidebar(){
    const sidebar = document.querySelector('.navigation ul');
    const menu1 = document.querySelector('.menu1');
    const menu2 = document.querySelector('.menu2');
    const logButton = document.querySelector('.navigation .loginSignin button');
    menu1.style.display = 'block' 
    sidebar.style.display = 'none'
    menu2.style.display = 'none'
    logButton.style.display = 'block'
}

//===========Login page POP UP===============

//--------------- option login --------------
function openOptionLogin(){
    const optionLogin = document.querySelector('.optionLogin');
    optionLogin.style.transform = 'translateX(0)' 
}

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopUpStd = document.querySelector('#student');
const btnPopUpLec = document.querySelector('#lecture');
const iconClose = document.querySelector('.icon-close');
const optionLogin = document.querySelector('.optionLogin');
const background = document.querySelector('.backGroundBody');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopUpStd.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    optionLogin.style.transform = 'translateX(400px)';
    background.style.display = 'none';
});
btnPopUpLec.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    optionLogin.style.transform = 'translateX(400px)';
    background.style.display = 'none';
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    background.style.display = 'block';
});