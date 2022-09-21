//12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas
//3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de
//aproveitamento, usando a fórmula:
//MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7
//A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno,
//suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a
//mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.
//Média de aproveitamento Conceito
//>= 90 A
//>= 75 e < 90 B
//>= 60 e < 75 C
//>= 40 e < 60 D
//< 40 E 


let numeroAluno = 150;             

let exercicio1 = 10;                  // notas iniciais já definidas
let exercicio2 = 90;
let exercicio3 = 80;
let mediaExercicios = (exercicio1 + exercicio2 + exercicio3)/3;
let av1 = 10;
let av2 = 90;
let av3 = 10;
let mediaAv = (av1 + av2 * 2 + av3 * 3 + mediaExercicios)/7;
let conceito;

console.log('Aluno: ', numeroAluno, );
console.log('Nota exercicios: ', 'Exercicio 1: ', 'Nota 10.', 'Exercicio 2: ','Nota 9.', 'Exercicio 3: ', 'Nota 8.');
console.log('Media dos Exercicios: ', mediaExercicios);
console.log('Nota Avaliações: ', 'Av 1: ', 'Nota 10.', 'Av 2: ', 'Nota 9.', 'Av 3: ', 'Nota 10.');
console.log('Media de aproveitamento: ', mediaAv);

if (mediaAv >= 90) {                         // calculo das medias
    conceito = 'A'
}else if (mediaAv >= 75 && mediaAv < 90) {
    conceito = 'B'
}else if (mediaAv >= 60 && mediaAv < 75) {
    conceito = 'C'
}else if (mediaAv >= 40 && mediaAv < 60) {
    conceito = 'D'
}else if (mediaAv < 40) {
    conceito = 'E'
}

if (conceito == 'A' || conceito == 'B' || conceito == 'C') {    //informações do conceito de aprovação
    console.log('Aprovado ');
    console.log(' Conceito ', conceito);
}else{
    console.log('Reprovado ');
    console.log(' Conceito ', conceito);
}
