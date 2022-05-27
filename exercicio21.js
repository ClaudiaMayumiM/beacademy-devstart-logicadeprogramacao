// Crie um programa, inicie o saldo do cliente com R$1000,00 e permita saques consecutivos no valor de R$ 150,00 enquanto seu saldo estiver positivo.
// Quando isto ocorrer interrompa a operação e informe que o saque não pode ser efetuado em razão de que o saldo era insuficiente para efetuar a operação.

let saldo = 1000;

do {

  var saque = prompt('Digite S para realizar o saque: ').toUpperCase();

  saldo -= 150;

  console.log(saldo);

  if (saldo < 150) {
    console.log('Saldo insuficiente!');
  }

} while (saque == 'S' && saldo > 150);