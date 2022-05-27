// Crie um programa que imprima os múltiplos de 3 entre dois números digitados pelo usuário.

let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));

let multiplos = [];

if (num1 > num2) {
  for (let i = num2; i <= num1; i++) {
    if (i % 3 == 0) multiplos.push(i);
  }
} else {
  for (let i = num1; i <= num2; i++) {
    if (i % 3 == 0) multiplos.push(i);
  }
}

console.log(multiplos);