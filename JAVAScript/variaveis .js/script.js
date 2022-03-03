// tipos de primitivos

// Boolean
var vOuF = false;
console.log(typeof(vOuF));

// Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

// String ou Caractere
var nome = "giovanna";
console.log(typeof(nome)); 

// como declarar
var variavel =  "giovanna";
variavel = "jonatas";
console.log(variavel);

let variavel2 = "giuliana";
variavel2 = "vinicius";
console.log(variavel2);

const constante = "claudete";
/* constante = "pio"; --> error */  
console.log(constante);

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
   let escopoLocalInterno = "local";
   console.log(escopoLocalInterno);
}

escopoLocal();

// Atribuição
var atribuicao = "laura";

// Comparaçao
var comparacao = "0" == 0;
console.log(comparacao)

// Comparacao identica
var comparaIdentica = "0" === 0;
console.log(comparaIdentica);

// Adicao
var adicao = 1 + 1;
console.log(adicao);

// Subtracao
var subtracao = 1 - 1;
console.log(subtracao);

// Multiplicacao
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// Divisao real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

// Divisao inteira
var divisaInteira = 5 % 2;
console.log(divisaInteira);

// Potenciacao
var potenciacao = 2 ** 10;
console.log(potenciacao)

// Maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// Menor que
var menorQue = 8 > 10;
console.log(menorQue);

// Maior ou igual
var maiorOUIgual = 7 >= 9;
console.log(maiorOUIgual);

// Menor ou igual
var menorOUIgual = 8 >= 8;
console.log(menorOUIgual);

var e = true && false;
console.log(e);

var ou = false || false;

var nao = !true;
console.log(nao);
