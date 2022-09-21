//7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar,
//imprimir o resultado desta operação. 


let numero = 20

if (numero % 2 === 0) {
    numero = numero + 5
    document.write('Resultado da soma com o número par: ' + numero)
}else{
    numero = numero + 8
    document.write('Resultado da soma com o número impar: ' + numero)
}