// Crie um programa que, utilizando a estrutura escolha caso, permita ao usuário escolher a operação a ser realizada (depósito, saque ou transferência). Caso a operação seja de transferência, solicite o nome do banco, o número da agência e da conta, receba as informações e, ao final exiba o valor inicial, a operação realizada e o saldo atual, no caso de transferência exiba também os dados do banco, agência e conta. 
// Altere o programa acima a fim de repetir a operação, por tantas vezes quanto o usuário desejar incialmente, implemente a solução utilizando a estrutura para. Por exemplo, o usuário quer fazer um depósito, um saque e uma transferência, então, no início do programa ele define que irá realizar 3 operações.

let numTransacoes = parseInt(prompt('Digite o número de transações que deseja realizar: '));

for (let i = 1; i <= numTransacoes; i++) {

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
  
}