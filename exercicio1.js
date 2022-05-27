// Crie um programa que declare 3 variáveis para receber o nome, o peso e a altura de uma pessoa. 


let nome = prompt('Digite o seu nome: ');
let peso = prompt('Digite o seu peso em kg: ');
let altura = prompt('Digite a sua altura em m: ');


// Com base no programa anterior, calcule e exiba ao final o índice de massa corporal (IMC) da pessoa, sabendo que a fórmula para o cálculo é:
// IMC = peso/(altura*altura)


let imc = peso / (altura * altura);

imc = imc.toFixed(2)

console.log(`Nome: ${nome} Altura: ${altura}cm Peso:${peso}kg IMC: ${imc}kg/m2`);