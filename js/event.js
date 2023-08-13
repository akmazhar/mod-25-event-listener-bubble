// console.log('This is separate JS file');

function makeRed(){
    document.body.style.backgroundColor='red';
}

function makeBlue(){
    document.body.style.backgroundColor='blue';
}

function makeYellow(){
    document.body.style.backgroundColor='yellow';
}

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = makePurple;

function makePurple() {
document.body.style.backgroundColor= 'purple';
}

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink(){
document.body.style.backgroundColor='pink';
}

const makeBlueButton = document.getElementById('make-blue');
BlueButton.onclick = function makeBlue() {
document.body.style.backgroundColor= 'blue';  
} 





