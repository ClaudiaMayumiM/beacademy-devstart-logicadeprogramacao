// Crie um programa que receba a idade da pessoa e a classifique de acordo com:
// Menos de 18 anos -> menor de idade 
// Maior que 18 anos e menor que 60 anos -> adulto 
// Mais que 60 anos -> Idoso 

let idade = prompt('Digite a sua idade: ');

console.log(`Você tem ${idade} anos, portanto...`);

if (idade < 18) {
  console.log('Menor de idade!');
} else if (idade >= 18 && idade < 60) {
  console.log('Adulto!');
} else {
  console.log('Idoso!');
}