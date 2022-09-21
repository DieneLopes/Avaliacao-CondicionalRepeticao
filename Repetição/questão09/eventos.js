//9) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
//P.G. contendo 10 valores. 



function progGeometrica (inicial, razao) {
    let sequenciaPg = [];
    for (let i = 1; i <= 10; i++) {         //calculo para 0s 10 valores. E apresentação dos mesmos na tela.
    sequenciaPg.push (inicial);
    inicial *= razao;
    }
    document.write (sequenciaPg);
    }
    progGeometrica (2,2)
    