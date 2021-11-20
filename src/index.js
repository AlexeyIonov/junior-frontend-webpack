import '../index.css'
import JS_IMAGE from '../assets/js.png'

console.log('Hello World!');

const jsImg = document.createElement('img');
jsImg.className = 'js-image';
jsImg.src = JS_IMAGE;

document.body.append(jsImg);