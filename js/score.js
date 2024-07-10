import { header } from "./header.js";

header();

const scoreDOM = document.getElementsByClassName('score');
const scoreHomeDOM = (scoreDOM[0].getElementsByTagName('div'))[1];
const scoreAwayDOM = (scoreDOM[0].getElementsByTagName('div'))[3];

const buttonsDOM = document.querySelectorAll('button');
const home1DOM = buttonsDOM[0];
const home2DOM = buttonsDOM[1];
const home3DOM = buttonsDOM[2];
const away1DOM = buttonsDOM[3];
const away2DOM = buttonsDOM[4];
const away3DOM = buttonsDOM[5];

const statisticDOM = document.getElementsByClassName('.statistic > div');

let scoreHome = 0;
let scoreAway = 0;

function plusHome(home = 0) {
    scoreHome += home;
    scoreHomeDOM.textContent = scoreHome;
    statisticDOM.insertAdjacentHTML('afterbegin', `<br><b>Home:</b> +${home}`);
}
function plusAway(away = 0) {
    scoreAway += away;
    scoreAwayDOM.textContent = scoreAway;
    statisticDOM.insertAdjacentHTML('afterbegin', `<br><b>Away</b>: +${away}`);
}

home1DOM.addEventListener('click', () => plusHome(1));
home2DOM.addEventListener('click', () => plusHome(2));
home3DOM.addEventListener('click', () => plusHome(3));
away1DOM.addEventListener('click', () => plusAway(1));
away2DOM.addEventListener('click', () => plusAway(2));
away3DOM.addEventListener('click', () => plusAway(3));