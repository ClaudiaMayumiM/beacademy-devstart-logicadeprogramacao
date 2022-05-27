// Crie um programa que receba o nome e a idade de uma pessoa e exiba:
// 1. O nome e a idade informada;
// 2. Verdadeiro se a idade é menor que 18;
// 3. Falso se a idade é diferente de 25;
// 4. Falso se a idade é diferente de 25 E o nome é igual a Marcos;
// 5. Verdadeiro se a idade é diferente de 25 OU o nome é igual a Marcos;
// 6. Verdadeiro se a idade dividida por 2 é igual a ZERO;


let nome = prompt('Digite o seu nome: ');
let idade = prompt('Digite a sua idade: ');

console.log(`Nome: ${nome} -- Idade: ${idade}`);

nome = nome.toLowerCase();

if (idade < 18) {
  console.log('VERDADEIRO');
} else if (idade != 25) {
  console.log('FALSO');
} else if (idade != 25 && nome == 'marcos') {
  console.log('FALSO');
} else if (idade != 25 || nome == 'marcos') {
  console.log('VERDADEIRO');
} else if (idade % 2 == 0) {
  console.log('VERDADEIRO');
}
