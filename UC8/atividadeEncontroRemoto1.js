/*TRABALHO DA AULA REMOTA DE 19/08/2021*/

const   listaDePecas = ["Ar condicionado", "Motor", "Amortecedor"];
console.log (listaDePecas);

// verifica a quantidade de peças
if(listaDePecas.length < 10){
    console.log("é possível cadastrar mais peças");
}else{
    console.log("não há mais espaço na lista");
}

var peso = 120;

//verifica o peso da peça
if(peso > 100){
    console.log("sua peça esta dentro do peso permitido");
}else{
    console.log("sua peça não esta dentro do peso permitido");
}

//verifica se o nome da peça tem ao menos 3 caracteres ou se ele está vazio;
let nomePeca = "navalha";

if (nomePeca.length >3) {
    console.log("nome permitido");
}else if(nomePeca.length == 0){
    console.log("o nome não pode ser vazio");
}else{
    console.log("o nome não é permitido");
}

switch (nomePeca.length) {
    case 0:
        console.log("o nome não pode ser vazio");
        break;
    case 1:
    case 2:
    case 3:
        console.log("o nome não é permitido");
        break;
    default:
        console.log("nome permitido");
        break;
}