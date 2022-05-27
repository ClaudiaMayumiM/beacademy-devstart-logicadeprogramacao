// Solicitar a idade de várias pessoas e imprimir:
// • Total de pessoas com menos de 18 anos.
// • Total de pessoas com mais de 60 anos.
// • O programa termina quando idade for =-99.

let menorDe18 = 0;
let maiorDe60 = 0;

do {

  var idade = parseInt(prompt('Informe a sua idade: '));

  if (idade < 18) menorDe18++;
  else if (idade > 60) maiorDe60++;

} while (idade != -99);

console.log(`A quantidade de pessoas com menos de 18 anos é ${menorDe18}, enquanto a quantidade de pessoas com mais de 60 anos é ${maiorDe60}!`);