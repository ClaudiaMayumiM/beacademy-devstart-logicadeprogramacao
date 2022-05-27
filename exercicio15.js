// Crie um programa que solicite ao usuário o seu nome e senha do cartão e valide se a senha e o nome estão corretos (Nome: Marcos e senha: paylivre) e, caso positivo, dê boas vindas ao usuário e, em caso negativo, solicite os dados novamente.

let nome = prompt('Digite o nome de usuário: ');
let senha = prompt('Digite sua senha: ');

if (nome == 'Marcos' && senha == 'paylivre') {
  console.log('Seja bem vindo!');
}

while (!(nome == 'Marcos' && senha == 'paylivre')) {
  console.log('Usuário e/ou senha incorreto(s)!');
  nome = prompt('Digite o nome de usuário: ');
  senha = prompt('Digite sua senha: ');

  if (nome == 'Marcos' && senha == 'paylivre') {
    console.log('Seja bem vindo!');
    break;
  }
}
