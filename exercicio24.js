// 1. Crie um programa que permita ao usuário cadastrar 5 clientes com os seguintes dados:
// • Nome;
// • CPF;
// • RG;
// • Endereço;
// • Telefone.
// 2. Guarde os dados dos clientes em um vetor e ao final exiba-os.

let clientes = [];
let cpfs = [];
let rgs = [];
let ceps = [];
let telefones = [];

for (let i = 0; i < 5; i++) {

  let cliente = prompt('Informe o nome do cliente: ');
  clientes.push(cliente); 

  let cpf = prompt('Informe o CPF do cliente: ');
  cpfs.push(cpf);

  let rg = prompt('Informe o RG do cliente: ');
  rgs.push(rg);

  let cep = prompt('Informe o CEP do cliente: ');
  ceps.push(cep);

  let telefone = prompt('Informe o telefone do cliente: ');
  telefones.push(telefone);

}

for (let j = 0; j < 5; j++) {

  console.log(`O cliente ${clientes[j]}, portador do CPF ${cpfs[j]} e do RG ${rgs[j]}, residente no CEP ${ceps[j]}, possui o telefone de número ${telefones[j]}.`);

}