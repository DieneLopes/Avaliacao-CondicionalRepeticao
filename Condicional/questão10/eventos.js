//10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
//umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2

//Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo
//com a tabela abaixo. 
//IMC em adultos Condição
//Abaixo de 18,5 Abaixo do peso
//Entre 18,5 e 25 Peso normal
//Entre 25 e 30 Acima do peso
//Acima de 30 obeso


let imc;
let peso = 51;
let altura = 1.58;              // mostrando resultado de peso e altura já definidos
                                     
imc =  peso / (altura * altura);

console.log (imc);

if (imc <= 18.5) {
    console.log ('Abaixo do peso');
}
if (imc <= 24.9 && imc >= 18.6) {
    console.log ('Peso normal');
}
if (imc <= 25 && imc >= 29.9) {
    console.log ('Acima do peso');
}
if (imc > 30) {
    console.log ('Obeso');
}


