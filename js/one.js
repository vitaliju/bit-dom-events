import { header } from "./header.js";

header();

const buttonsDOM = document.querySelectorAll('button');
const minus3DOM = buttonsDOM[0];
const minus2DOM = buttonsDOM[1];
const minus1DOM = buttonsDOM[2];
const plus3DOM = buttonsDOM[3];
const plus2DOM = buttonsDOM[4];
const plus1DOM = buttonsDOM[5];
const resultDOM = document.querySelector('.one > div');

let total = 0;
function update(coof = 0) {
    total += coof;
    resultDOM.textContent = total;
}

minus1DOM.addEventListener('click', () => update(-1));
minus2DOM.addEventListener('click', () => update(-2));
minus3DOM.addEventListener('click', () => update(-3));
plus1DOM.addEventListener('click',  () => update(1));
plus2DOM.addEventListener('click',  () => update(2));
plus3DOM.addEventListener('click',  () => update(3));