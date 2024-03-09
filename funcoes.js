/*
Função: Trecho de código que só é executado quando é chamado/invocado

  Função Void (vazia)
  Função Parâmetro (parametro)
  Função return
  Função Arrow - arrow function
*/

/*
//Função incrementar alguma coisa - FUNÇÃO VOID pois não RETORNA NADA
let valor = 20;

function incrementar() {
  //aqui dentro  ficará o  código a ser chamado
  valor = valor + 30;
}

//chamar função
incrementar();

console.log(valor);
*/

//FUNÇÃO COM  PARÂMETROS - Serve para que a função receba valores e cada hora valores diferentes
/*function soma(numero1, numero2) {
  const somaDosNumeros = numero1 + numero2;

  console.log(somaDosNumeros);
}

soma(20, 40);
soma(15, 15);
*/

//FUNÇÃO RETURN - Função que retorna algo a quem está chamando a função
/*
function soma(numero1, numero2) {
  const somaDosNumeros = numero1 + numero2;

  return somaDosNumeros;
}

const meusNumeros = soma(4, 6);
const meusNumeros2 = soma(40, 30);

console.log(meusNumeros);
console.log(meusNumeros2);
*/

//ARROW FUNCTION - Forma MODERNA de escrever uma função
/*
const multiplicar = (numero1, numero2) => {
  const multiplicacao = numero1 * numero2;
  return multiplicacao;
};

const multiplicacao = multiplicar(5, 5);
*/
//ou

const multiplicar = (numero1, numero2) => numero1 * numero2;

const multiplicacao = multiplicar(5, 2);

console.log(multiplicacao);
