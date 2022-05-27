// Crie um programa que, utilizando a estrutura escolha caso, permita ao usuário escolher a operação a realizar (depósito, saque ou transferência). Caso a operação seja de transferência solicite o nome do banco, da agência e conta, receba as informações e, ao final exiba o valor inicial, a operação realizada e o saldo atual, no caso de transferência exiba também os dados do banco, agência e conta.

let operacao = prompt('Digite a operação que deseja realizar, usando D para depósito, S para saque ou T para transferência: ').toUpperCase();

let banco = prompt('Digite o nome do banco: ');

let agencia = prompt('Digite o código da agência: ');

let conta = prompt('Digite o número da conta: ');

let valor = parseFloat(prompt('Digite o valor: '));

let saldo = 10;

switch (operacao) {
  case 'D':
    console.log(`O saldo inicial era de R$${saldo}.`);
    saldo += valor;
    console.log(`O valor de R$${valor} foi depositado na conta ${conta}, da agência ${agencia}, referente ao banco ${banco} com sucesso! Saldo atual: R$${saldo}.`);
    break;
  case 'S':
    console.log(`O saldo inicial era de R$${saldo}.`);
    if (saldo < valor) {
      console.log('Saldo insuficiente!');
      break;
    } else {
      saldo -= valor;
      console.log(`O valor de R$${valor} foi sacado da conta ${conta}, da agência ${agencia}, referente ao banco ${banco} com sucesso! Saldo atual: R$${saldo}.`);
      break;
    }
  case 'T':
    console.log(`O saldo inicial era de R$${saldo}.`);
    let destino = prompt('Digite o número da conta de destino: ');
    if (saldo < valor) {
      console.log('Saldo insuficiente!');
      break;
    } else {
      saldo -= valor;
      console.log(`O valor de R$${valor} foi transferido da conta ${conta}, da agência ${agencia}, referente ao banco ${banco} com sucesso! Saldo atual: R$${saldo}. Conta destino: ${destino}.`);
      break;
    }
  default:
    console.log('Operação inválida!');
    break;
}