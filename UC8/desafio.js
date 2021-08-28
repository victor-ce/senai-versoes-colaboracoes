
/* REGRA NEGÓCIO 1 - Listar participantes e palestrantes por evento*/
let listaEvento = ["Evento A","Evento B","Evento C","Evento D"];
let listaPalestrantes = ["Palestrante A","Palestrante B","Palestrante C","Palestrante D"];
let listaData   = [new Date("2021-07-16"),new Date("2021-08-16"),new Date("2021-09-16"),new Date("2021-10-16"),]
let listaParticipantes = [["a1","a2","a3","a4","a5","a6"],["B1","B2","B3","B4","B5","B6","B7"],["C1","C2","C3","C4"],["D1","D2","D3","D4","D5"]];
let numeroEvento2 = ["número evento: ","1","2","3","4"];
console.log(listaEvento);
console.log(listaPalestrantes);

console.log("digite o número do evento que você deseja participar")
// O participante digitou o evento número 3;
let numeroEvento = 3; 

//Leitura da data do sistema
let dataSistema = new Date();

//Quebra da data do sistema
let anoAtual = dataSistema.getFullYear();
let mesAtual = dataSistema.getMonth()+1;
let diaAtual = dataSistema.getDate();

// O sistema verifica se a data do evento que o participante quer se cadastrar é uma data váldia - REGRA DE NEGÓCIO 2
if( listaData[numeroEvento] < dataSistema){

    //Se a data do evento já passou, o sistema vai impedir que o cadastro continue;
    console.log("O cadastro não é permitido por data inválida");

} else if (listaParticipantes[numeroEvento].length>100){

    // se o evento tem mais do que 100 participantes inscritos, ele não irá permitir o cadastro de novos participantes - REGRA NEGÓCIO 3
    console.log("O cadastro não será permitido por exceder o limite permitido");

} else{
    // Se o evento tiver menos que 100 participantes cadastrados, o sistema vai pedir a data de nascimento para continuar com o cadastro;
    // Coleta data de nacimento
    console.log("digite a sua data de nascimento (usar o formato: DD/MM/YYYY)")
    let dataNasc = ('16/10/1991'); // data digitada pelo usuário;
    let dataNascimento = dataNasc.split('/');
    let diaNasc = dataNascimento[0];
    let mesNasc = dataNascimento[1];
    let anoNasc = dataNascimento[2];

    //Cálculo da idade da pessoa
    let idade = anoAtual - anoNasc;
    if( mesAtual<mesNasc){
        idade = idade -1;
    }else{
        if( mesAtual == mesNasc){
            if( diaAtual < diaNasc){
                idade = idade -1;
            }  
        }
    }

    //Verificação da idade do participante - REGRA NEGÓCIO 4;
    if( idade > 18){
        console.log("Participante cadastrado com sucesso");
    } else{
        console.log("O cadastro não é permitido devido a idade ")
    }
    
}