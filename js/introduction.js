import { header } from "./header.js";

header();

const introDOM = document.getElementsByClassName('intro')[0];
const buttonDOM = introDOM.getElementsByTagName('button');
const paraDOM = document.getElementById('para');

function intro(firstName = '____') {
    paraDOM.insertAdjacentHTML('afterbegin', `<p>Hello my name is ${firstName}</p>`);
}
for (let i = 0; i < buttonDOM.length; i++){
    buttonDOM[i].addEventListener('click', () => intro(buttonDOM[i].innerText));
}
