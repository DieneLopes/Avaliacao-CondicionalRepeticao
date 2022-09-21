//5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos.
//Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos
//números lidos. O número que encerrará a leitura será zero.


let numeros = [10, 9, 90, 89];  //números já foram definidos 

let qtd_par = 0;
let qtd_impar = 0;

let mediaPar = 0;
let mediaLidos = 0;
let somaPar = 0;
let somaLidos = 0;

for (let n = 0; n < numeros.length; n++) {
    somaLidos += numeros [n]

    if (numeros[n] % 2 === 0) {
        qtd_par++;
        somaPar += numeros[n];
    } else {
        qtd_impar++
    }
}

mediaPar = somaPar / qtd_par
mediaLidos = somaLidos / numeros.length

console.log (mediaPar)
console.log (mediaLidos)