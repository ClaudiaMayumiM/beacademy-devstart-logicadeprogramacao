// Apresentar o total da soma obtida dos cem primeiros números naturais.

let soma = 0;
let proximo = 0;

do {

  soma += proximo;

  proximo++;

} while (proximo < 100);

console.log(`A soma dos 100 primeiros números naturais é ${soma}!`);