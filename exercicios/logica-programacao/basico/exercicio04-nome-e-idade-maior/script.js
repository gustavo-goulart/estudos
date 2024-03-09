const nomeUsuario1 = prompt("Digite seu nome: ");
let idadeUsuario1 = parseInt(prompt("Informe sua idade: "));

const nomeUsuario2 = prompt("Digite outro nome: ");
let idadeUsuario2 = parseInt(prompt("Informe sua idade: "));

if (idadeUsuario1 > idadeUsuario2) {
  alert(
    `Você ${nomeUsuario1} tem ${idadeUsuario1} anos, portanto é mais VELHO que, ${nomeUsuario2} que tem ${idadeUsuario2} anos.`
  );
} else {
  alert(
    `Você ${nomeUsuario1} tem ${idadeUsuario1} anos, portanto é mais NOVO que, ${nomeUsuario2} que tem ${idadeUsuario2} anos.`
  );
}

/*
// Recebe o nome e a idade das duas pessoas
let nome1 = prompt("Digite o nome da primeira pessoa: ");
let idade1 = parseInt(prompt("Digite a idade da primeira pessoa: "));

let nome2 = prompt("Digite o nome da segunda pessoa: ");
let idade2 = parseInt(prompt("Digite a idade da segunda pessoa: "));

// Verifica qual pessoa é mais velha
if (idade1 > idade2) {
    console.log(nome1 + " é mais velho(a) que " + nome2 + ".");
} else if (idade2 > idade1) {
    console.log(nome2 + " é mais velho(a) que " + nome1 + ".");
} else {
    console.log(nome1 + " e " + nome2 + " têm a mesma idade.");
}


*/
