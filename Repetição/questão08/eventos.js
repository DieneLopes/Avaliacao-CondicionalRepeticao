//8) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
//P.A. contendo 10 valores. 



function aritmetica (inicial, razao) {
    let sequenciaPa = [];          
    for (let i = 1; i <= 10; i++) {       //calculo para 0s 10 valores. E apresentação dos mesmos na tela.
    sequenciaPa.push (inicial);
    inicial += razao;
    }
    document.write (sequenciaPa);
    }
    aritmetica (5, 8)