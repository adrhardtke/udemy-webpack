import Title from './components/title.js'
import Image from './components/image.js'
import Button from './components/button'

import warningHtml from './templates/warning.html'
import exampleTxt from './files/example.txt'
import exampleJson from './files/example.json'

const title = new Title()
title.create("Primeira pagina")

const image = new Image()
image.createImage()

const button = new Button()
button.create()

// Babel Spread
const obj = {a: 1, b: 2, c: 3, d: 4}
let {a, b, ...teste} = obj
console.log(a)
console.log(b)
console.log(teste)

// Teste novas funcoes
// class C {
//     @enumerable(false)
//     method() { }
// }
// function enumerable(value) {
//     return function (target, key, descriptor) {
//         descriptor.enumerable = value;
//         return descriptor;
//     }
// }
// console.log(C)

// Import de Html
const body = document.querySelector('body')
body.innerHTML += warningHtml

// Import arquivo de txt
const exampleTxtHtml = exampleTxt 
console.log(exampleTxtHtml)
console.log(exampleTxtHtml.toUpperCase())

// Import json
const myJson = exampleJson.lista
myJson.forEach(item => console.log(item))