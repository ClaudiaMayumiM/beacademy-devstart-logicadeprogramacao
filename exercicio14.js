// Crie um programa que imprima a tabuada de um número digitado pelo usuário.

let numero = parseInt(prompt('Digite o número escolhido: '));

let i = 1;

while (i <= 10) {

  console.log(`${numero} x ${i} = ${numero * i}`);

  i++;

}