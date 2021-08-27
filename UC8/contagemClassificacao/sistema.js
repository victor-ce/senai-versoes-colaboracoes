/* ENUNCIADO:
percorrer de zero atéo número de alunos
- se o número for par , escreva par e o número correspondente
- se o número for impar, escrever impar e o número correspondente;
- se o número for zero, escrever zero e o número correspondente;*/



// Versão FOR
console.log("usando a estrutura FOR");
let numeroDeAlunos = 10;
for( let contador = 0; contador <= numeroDeAlunos; contador++){

    if (contador == 0) {
        console.log("O número é ZERO");
        console.log(contador);
        
    } else if (contador%2 == 0) {
        console.log("O número " + contador +" é PAR");
        console.log(contador);
    } else{
        console.log("O número "+contador+" é IMPAR");
        console.log(contador);
    }
}

// Versão WHILE
console.log("Versão usando a estrutura WHILE")
let contador2 = 0;
while (contador2 <= numeroDeAlunos) {
    if (contador2 == 0) {
        console.log("O número é ZERO");
        console.log(contador2);
        
    } else if (contador2%2 == 0) {
        console.log("O número " + contador2 +" é PAR");
        console.log(contador2);
    } else{
        console.log("O número "+contador2+" é IMPAR");
        console.log(contador2);
    }   
    contador2++;
}

// estrutura de repetição forEach
console.log("usando a estrutura forEach");
let listaDeAlunos = ["Marcelo", "Juh", "Cleber", "Wesley", "Adriano"];
listaDeAlunos.forEach( aluno => {
    console.log(aluno)
});