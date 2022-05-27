// Crie um programa que receba do usuário um número e apresente a Tabuada deste.

let numero = parseInt(prompt('Digite o número escolhido: '));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}