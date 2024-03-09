let quantidadeProduto = parseInt(
  prompt("Informe a quantidade a comprar do PRODUTO: ")
);

let precoUnitarioProduto = parseFloat(prompt("Informe o preço do produto: "));

let valorTotalProduto = quantidadeProduto * precoUnitarioProduto;

alert(
  `A Quantidade digitada do produto foi de: ${quantidadeProduto} e o preço digitado foi de R$ ${precoUnitarioProduto}. O VALOR TOTAL DO PRODUTO É R$ ${valorTotalProduto.toFixed(
    2
  )}`
);

/*
// Recebe o preço unitário e a quantidade comprada do usuário
let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto: "));
let quantidade = parseInt(prompt("Digite a quantidade comprada: "));

// Calcula o valor total a ser pago
let valorTotal = precoUnitario * quantidade;

// Exibe o valor total a ser pago
console.log("O valor total a ser pago é: R$" + valorTotal.toFixed(2));
*/
