// Crie um programa que permita ao usuário tentar logar em seu sistema informando seu nome e senha. Repita a operação até que o nome e senha correspondam a um valor armazenado(Marcos – 1234). Caso o usuário digite -1 interrompa a repetição e informe que o programa será finalizado por solicitação do usuário.


do {
  var nome = prompt('Informe o seu nome de usuário: ');
  var senha = parseInt(prompt('Informe a sua senha: '));

  var sair = parseInt(prompt('Para sair digite -1!'));

} while (!(nome == 'Marcos' && senha == 1234) || !(sair != -1));

if (nome == 'Marcos' && senha == 1234) {
  console.log('Login efetuado com sucesso!');
} 