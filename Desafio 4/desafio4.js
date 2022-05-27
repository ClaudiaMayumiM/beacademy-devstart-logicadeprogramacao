// Crie um programa que receba a altura e o peso da pessoa e a classifique de acordo com os dados abaixo:
// IMC < 19 -> Abaixo do peso 
// 19 <= IMC < 25 -> Peso normal 
// 25 <= IMC < 30 -> Sobrepeso 
// 30 <= IMC < 40 -> Obesidade Tipo I 
// IMC >= 40 -> Obesidade mórbida


function calculaImc() {
    
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  const imc = peso / (altura * altura);

  const resultado = document.getElementById("imc");

  resultado.value = imc.toFixed(2);

  const classificacao = document.getElementById("classificacao");

  if (imc < 19) {
      classificacao.value = "Abaixo do peso";
  } else if (imc < 25) {
      classificacao.value = "Peso normal";
  } else if (imc < 30) {
      classificacao.value = "Sobrepeso";
  } else if (imc < 40) {
      classificacao.value = "Obesidade Tipo I";
  } else if (imc >= 40) {
      classificacao.value = "Obesidade mórbida";
  }

}