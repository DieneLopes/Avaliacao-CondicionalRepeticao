//2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
//mostrar :
//a. A menor altura do grupo;
//b. A maior altura do grupo;

let arrayAltura = [10,22,11,33,11,0,2,3,1,220,11,0]
let alturaMaxima = 0
let alturaMinima = 2222222222222222;
for (let index = 0; index < arrayAltura.length; index++) {
    let alturaAtual = arrayAltura [index]
    console.log('index', index)
    console.log('index', alturaAtual)
    console.log('index', alturaMaxima)
    if (alturaAtual > alturaMaxima ) {
        console.log('chegou no if muda o valor de alturaMaxima')
        alturaMaxima= alturaAtual
    }
    if(alturaAtual < alturaMinima)
    console.log('chegou no if2 muda o valor de alturaMinima')
    alturaMinima = alturaAtual
}
console.log(alturaMaxima)
console.log(alturaMinima)