// Crie um programa que permita cadastrar os seguintes dados de um aluno: nome, nota1 e nota2. Receba estes valores em vetores e calcule e exiba ao final todos os dados e a informação de que o aluno foi aprovado (média maior ou igual a 6) ou reprovado(média inferior a 6).

let alunos = [];
let nota1 = [];
let nota2 = [];

for (let i = 0; i < 5; i++) {

  let aluno = prompt('Informe o nome do aluno: ');
  alunos.push(aluno);
  
  let primeiraNota = parseFloat(prompt('Informe a primeira nota: '));
  nota1.push(primeiraNota);
  
  let segundaNota = parseFloat(prompt('Informe a segunda nota: '));
  nota2.push(segundaNota);

}

let media = [];

for (let j = 0; j < alunos.length; j++) {

  media = (nota1[0] + nota2[0]) / 2;

  if (media >= 6) {
    console.log(`O aluno ${alunos[j]} foi aprovado! Com nota 1 igual a ${nota1[j]} e nota 2 igual a ${nota2[j]}.`);
  } else {
    console.log(`O aluno ${alunos[j]} foi reprovado! Com nota 1 igual a ${nota1[j]} e nota 2 igual a ${nota2[j]}.`);
  }

}