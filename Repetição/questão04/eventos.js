//4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
//estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
//terminar quando for lido um número negativo. 



function qtd_numeros (... numeros) {  //os 3 pontos é p uma qtd indefinida de argumentos transportada pra dentro da array
    console.log (numeros)   
    let intervalo1 = 0 
    let intervalo2 = 0
    let intervalo3 = 0
    let intervalo4 = 0

    for (let i = 0; i < numeros.length; i++) {
        if (numeros [i] >= 0 && numeros [i] <= 25) {
            intervalo1++
        } else if (numeros [i] >= 26 && numeros [i] <= 50) {
            intervalo2++
        } else if (numeros [i] >= 51 && numeros [i] <= 75) {
            intervalo3++
        } else if (numeros [i] >= 76 && numeros [i] <= 100) {
            intervalo4++
        }
    }
    console.log(intervalo1)
    console.log(intervalo2)
    console.log(intervalo3)
    console.log(intervalo4)
}

qtd_numeros (4, 10, 17, 35, 77)