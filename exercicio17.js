// Crie um programa que permita ao usuário escolher a operação a ser realizada:
// 1. Depósito;
// 2. Saque;
// 3. Transferência;
// 4. Empréstimo;
// Em seguida solicite os dados para concretizar a operação e imprima o nome da operação feita e os dados referentes a ela. Exemplo:
// Depósito no Banco BOM agencia: 12-3 conta 1234-5
// para Marcos Monteiro. Saldo inicial: R$ 1000,00
// Depósito: R$500,00 Saldo final: R$ 1500,00.
// O programa deverá permitir ao usuário realizar quantas operações ele desejar, implemente a solução utilizando a estrutura enquanto.

let operacao = parseInt(prompt('Digite a operação que deseja realizar, usando 1 para depósito, 2 para saque, 3 para transferência ou 4 para empréstimo: '));

let saldo = 100;

function transacoes() {
  
  let banco = prompt('Informe o nome do banco: ');
  let agencia = parseInt(prompt('Informe o número da agência: '));
  let conta = parseInt(prompt('Informe o número da conta: '));
  let cliente = prompt('Informe o nome do cliente: ');
  let valor = parseFloat(prompt('Informe o valor: '));

  switch (operacao) {
    case 1:
      console.log(`Saldo inicial: R$${saldo},00`);
      saldo += valor;
      console.log(`Depósito no banco ${banco} | agência ${agencia} | conta ${conta} | para ${cliente} | Depósito: ${valor},00 | Saldo final: R$${saldo},00`);
      break;
    case 2:
      console.log(`Saldo inicial: R$${saldo},00`);
      if (valor > saldo) {
        console.log('Saldo insuficiente!');
        break;
      } else {
        saldo -= valor;
        console.log(`Saque no banco ${banco} | agência ${agencia} | conta ${conta} | para ${cliente} | Saque: R$${valor},00 | Saldo final: R$${saldo},00`);
        break;
      }
    case 3:
      console.log(`Saldo inicial: R$${saldo},00`);
      if (valor > saldo) {
        console.log('Saldo insuficiente!');
        break;
      } else {
        let destino = prompt('Informe a conta destino: ');
        saldo -= valor;
        console.log(`Transferência no banco ${banco} | agência ${agencia} | conta ${conta} | de ${cliente} | para a conta de destino ${destino} | Transferência no valor: R$${valor},00 | Saldo final: R$${saldo},00`);
        break;
      }
    case 4:
      console.log(`Saldo inicial: R$${saldo},00`);
      saldo += valor;
      console.log(`Empréstimo no banco ${banco} | agência ${agencia} | conta ${conta} | para ${cliente} | Empréstimo no valor: R$${valor},00 | Saldo final: R$${saldo},00`);
    default:
      break;
  }

}

transacoes();

let sair = prompt('Deseja realizar outra operação? Digite S para sim ou N para não: ').toUpperCase();

while (sair != 'N') {

  transacoes();

  sair = prompt('Deseja realizar outra operação? Digite S para sim ou N para não: ').toUpperCase();

}