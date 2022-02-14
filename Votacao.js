const prompt = require ('prompt-sync')();
console.clear();

//FUNÇÕES
function autoriza (idade) {
    if(idade >= 18){
        return 'OBRIGATÓRIO'
    }
    else if(idade < 18 && idade >= 16){
        return 'OPCIONAL'
    }
    else if(idade < 16){
        return 'NEGADO'
    }
}

function votacao (autorizacao, voto){
    if(autorizacao == 'OBRIGATÓRIO' || autorizacao == 'OPCIONAL'){
        if (voto == 1){
            return 1}
        else if(voto == 2){
            return 2}
        else if(voto == 3){
            return 3}
        else if(voto == 4){
            return 4}
        else if(voto == 5){
            return 5}
    }
    else{
        console.log('Você ainda não pode votar')
    }
}
function exibirResultado(){
    console.log(`
    O Candidato 1 recebeu ${lista1} votos.
    O Candidato 2 recebeu ${lista2} votos.
    O Candidato 3 recebeu ${lista3} votos.
    Votos Nulo: ${lista4}
    Votos em Branco: ${lista5}`)
    if(lista1 > lista2 && lista1 > lista3){
        console.log(`O vencedor da eleição é o Carlos Silva`)
    }
    else if(lista2 > lista1 && lista2 > lista3){
        console.log(`O vencedor da eleição é o João Santos`)
    }
    else if(lista3 > lista1 && lista3 > lista2){
        console.log(`O vencedor da eleição é o Luis Mendes`)
    }
    else if(lista1 == lista2 && lista1 == lista3){
        console.log(`Houve um empate entre os candidatos`)
    }
}

//LISTAS
let lista1 = 0;
let lista2 = 0;
let lista3 = 0;
let lista4 = 0;
let lista5 = 0;

//INICIO
console.log('HOJE É DIA DE ELEIÇÃO!!');

console.log();

console.log(`
Suas opções são: 
1. Carlos Silva
2. João Santos
3. Luis Mendes
4. Voto Nulo
5. Voto em Branco`);

console.log();

console.log(`
Lembrando que eleitores acima de 18 anos possuem voto obrigatório,
Entre 16 e 18 possuem voto opcional
E abaixo de 16 não podem votar.`);

console.log();

let quant = +prompt('Qual a quantidade de eleitores: ');

for(let i = 0; i < quant; i++){
    console.log();
    console.log(`Olá Eleitor(a) ${i+1}, seja bem-vindo(a)!`)
    var ano = +prompt('Em que ano você nasceu? ');
    var voto = +prompt('Qual seu voto? ');
    let idade = 2022 - ano
    let posicao = autoriza(idade)
    let re = votacao(posicao, voto)
    if(re == 1){
        lista1++
    }
    else if(re == 2){
        lista2++
    }
    else if(re == 3){
        lista3++
    }
    else if(re == 4){
        lista4++
    }
    else if(re == 5){
        lista5++
    }
}

exibirResultado()