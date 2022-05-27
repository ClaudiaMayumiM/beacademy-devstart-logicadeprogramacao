// Crie um programa que solicite ao usuário a operação desejada e implemente as quatro operações matemáticas (soma, subtração, multiplicação e divisão).

function calcular() {

  let n1 = document.getElementById("n1");
  let n2 = document.getElementById("n2");
  let simbol = document.getElementById("simbol").value;

  n1 = parseFloat(n1.value);
  n2 = parseFloat(n2.value);

  let result = 0;

  switch (simbol) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      break;
  }

  let resultado = document.getElementById("resultado");

  resultado.value = result;

}