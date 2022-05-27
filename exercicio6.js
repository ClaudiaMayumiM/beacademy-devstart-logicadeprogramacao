// Crie um programa que permita ao usuário escolher a operação a ser realizada (depósito ou saque), receba a informação da operação escolhida e o valor do usuário e, em seguida, atualize o seu saldo. Ao final exiba o valor inicial, a operação realizada e o saldo atual.

let saldo = 10;

let operacao = prompt('Digite D para depósito ou S para saque: ').toUpperCase();

let valor = parseFloat(prompt('Digite o valor: '));

console.log(`O seu saldo inicial é de R$ ${saldo}.`);

switch (operacao) {
  case 'D':
    saldo += valor; 
    console.log(`A operação de depósito foi realizada com sucesso! Seu novo saldo é de R$ ${saldo}.`);
    break;
  case 'S':
    saldo -= valor;
    console.log(`A operação de saque foi realizada com sucesso! Seu novo saldo é de R$ ${saldo}.`);
    break;
  default:
    console.log('Operação inválida!');
    break;
}
