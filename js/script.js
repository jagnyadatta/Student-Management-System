//===========toggle icon navbar==========
function showSidebar() {
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
function hideSidebar() {
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

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
const loginsignin = document.querySelector('.loginSignin');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
loginsignin.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// ==================Result Section================= 
function filterResults() {
    const viewTable = document.getElementById('resultTable');
    const errorMsg = document.getElementById('errorMsg');
    const yearFilter = document.getElementById('yearFilter').value;
    const courseFilter = document.getElementById('courseFilter').value;
    const branchFilter = document.getElementById('branchFilter').value;
    const semesterFilter = document.getElementById('semesterFilter').value;

    const table = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');

    if (
        (yearFilter === '') ||
        (courseFilter === '') ||
        (branchFilter === '') ||
        (semesterFilter === '')){
            errorMsg.style.display = 'block';
            viewTable.style.display = 'none';
        }
        else {
            viewTable.style.display = 'block';
            errorMsg.style.display = 'none';
        }

        for (let i = 0; i < rows.length; i++) {
            const year = rows[i].getElementsByTagName('td')[0].textContent;
            const course = rows[i].getElementsByTagName('td')[1].textContent;
            const branch = rows[i].getElementsByTagName('td')[2].textContent;
            const semester = rows[i].getElementsByTagName('td')[3].textContent;

            rows[i].style.display =
                (yearFilter === year) &&
                    (courseFilter === course) &&
                    (branchFilter === branch) &&
                    ( semesterFilter === semester) ? '' : 'none';
        }
}
