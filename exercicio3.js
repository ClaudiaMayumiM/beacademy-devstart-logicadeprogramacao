// Crie um programa que receba um valor de depósito do usuário e atualize o seu saldo. Ao final exiba o valor inicial, o depósito e o saldo atual.

let saldo = 50;

console.log(`Saldo inicial: ${saldo}`);

let deposito = parseFloat(prompt('Insira o valor de depósito: '));

saldo += deposito;

console.log(`Depósito: R$${deposito} -- Saldo atual: R$${saldo}`);
