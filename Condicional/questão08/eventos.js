//8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem
//decrescente. 


let a = 45
let b = 27
let c = 70

if(a > b && b > c){     // condicionais de checagem dos números correspondentes ao if e mostrando em ordem decrescente
    document.write('ordem decrescente: ',a,' < ',b,' < ',c);
    }
if(c > b && b > a){
    document.write('ordem decrescente: ',c,' < ',b, ' < ',a);
    }
if(a > c && c > b){
    document.write('ordem decrescente: ',a,' < ',c,' < ',b);
    }
if(b > c && c > a){
    document.write('ordem decrescente: ',b,' < ',c, ' < ',a);
    }
if(b > a && a > c){
    document.write('ordem decrescente: ',b,' < ',a,' < ',c);
    }
if(c > a && a > b){
    document.write('ordem decrescente: ',c,' < ',b,' < ',b);
    }
    