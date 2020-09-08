import './styles/main.scss';
// import '@babel/polyfill'; // >= es7
import { bro } from './js/bro';
import User, { printName, printAge } from './js/user';

document.querySelector('h1').textContent = bro(`How's it going`);

let me = new User('Ted', 62);
console.log(me);

printName(me);
printAge(me);
