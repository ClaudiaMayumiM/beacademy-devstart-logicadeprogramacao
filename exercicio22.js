// Faça um programa que solicite ao usuário o nome e o preço de 10 produtos e armazene-os em um vetor. Ao final imprima o nome e os valores correspondentes dos produtos.

let produtos = [];
let preco = [];

for (let i = 0; i < 3; i++) {

  let nomeProduto = prompt('Informe o nome do produto: ');
  produtos.push(nomeProduto);

  let valor = parseFloat(prompt('Informe o valor do produto: '));
  preco.push(valor);

}

for (let j = 0; j < produtos.length; j++) {
  
  console.log(`O produto ${produtos[j]} custa R$${preco[j]}.`);

}
