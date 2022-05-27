// Crie um programa que receba do usuário a figura geométrica que deseja calcular a área e o perímetro (Q-Quadrado ou T-Triângulo) e calcule e exiba a área e o perímetro da figura escolhida.

let figura = prompt('Escolha a figura que deseja calcular a área, digitando Q para quadrado ou T para triângulo equilátero: ').toUpperCase();

let base = parseInt(prompt('Digite o valor da base: '));

switch (figura) {
  case 'Q':
    let areaQ = base * base;
    let perimetroQ = base * 4;
    console.log(`A área do quadrado é igual a ${areaQ}m2 e seu perímetro é igual a ${perimetroQ}m.`)
    break;
  case 'T':
    let altura = parseInt(prompt('Digite o valor da altura do triângulo: '));
    let areaT = base * altura / 2;
    let perimetroT = base * 3;
    console.log(`A área do triângulo equilátero é igual a ${areaT}m2 e seu perímetro é igual a ${perimetroT}m.`);
  default:
    console.log('Figura inválida!');
    break;
}