// Crie um programa que realize as 4 operações matemáticas a partir de dois números que serão digitados pelo usuário. Após isso, imprima os valores na tela e em seguida pergunte se ele quer realizar novo cálculo, repetido as operações enquanto o usuário desejar continuar.

function operacoes() {

  let num1 = parseInt(prompt('Digite o primeiro número: '));
  let num2 = parseInt(prompt('Digite o segundo número: '));
  
  let soma = num1 + num2;
  let subtracao = num1 - num2;
  let multiplicacao = num1 * num2;
  let divisao = num1 / num2;
  
  console.log(`O valor da soma entre os números ${num1} e ${num2} é: ${soma}, o valor da subtração é: ${subtracao}, o valor da multiplicação é: ${multiplicacao} e o valor da divisão é: ${divisao}.`)
  
}

operacoes();

let continuacao = prompt('Deseja repetir a operação? S para sim ou N para não: ').toUpperCase();

while (continuacao == 'S') {
  
  operacoes();

  continuacao = prompt('Deseja repetir a operação? S para sim ou N para não: ').toUpperCase();
}

console.log('Obrigada por participar!');