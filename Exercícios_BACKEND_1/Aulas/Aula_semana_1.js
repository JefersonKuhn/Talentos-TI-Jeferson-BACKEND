// AULA= 01/07/24 REVISÃO LÓGICA

/*const nome = "Jeferson"
let sobrenome = "Kuhn Dutra"
var idade = 36
console.log ("Meu nome é" , nome, sobrenome, "tenho", idade, "anos")

console.log (` Meu nome é ${nome} ${sobrenome}, e tenho ${idade} anos.`)*/

// Template string (tipo texto) não calcula
//const nome = "Jeferson Kuhn Dutra"


// Numbers (calcula valores)
/*const mes = 7
const temperatura = -3 
const num1 = 25
const num2 = 15

console.log (num1 + num2)*/

// Booleans
/*let souEstudante = false
let souProfessor = true*/

// Exercício ( crie uma variavel com o nome de vocês, a idade e uma variavel que diga se vocês são estudantes ou não. Imprima a frase no console).
/*const nome = "jeferson Kuhn"
const idade = 36
let souEstudante = true
let souProfessor = false

console.log (` Meu nome é ${nome}, e tenho ${idade} anos, você é estudante? ${souEstudante}.`)

console.log (` Meu nome é ${nome}, e tenho ${idade} anos, você é Professor? ${souProfessor}.`)*/

//string transformar em Numbers
/*const num1 = "50"
const num2 = "70"*/

// transformação
/*const newNum1 = Number(num1)
const newNum2 = Number(num2)
const soma = newNum1 + newNum2

console.log(soma)*/

// passando Numbers para strings
//const num3 = 5
//console.log(tipeof num3)
//const num


// AULA= 02/07/24

//Set-ExecutionPolicy RemoteSigned 
//npm install -g readline-sync

/*const readlineSync = require('readline-sync');

const num1 = Number(readlineSync.question('Insira um número'))
const num2 = Number(readlineSync.question('Insira outro número'))

console.log(num1 + num2)*/

// Operadores Aritiméticos
// Soma +
// Subtração -
// Multiplicação *
// Divisão /

// Comparadores

//Igual (==)	
//Não igual (!=)	
//Estritamente igual (===)	
//Estritamente não igual (!==)	
//Maior que (>)	
//Maior que ou igual (>=)	
//Menor que (<)	
//Menor que ou igual (<=)

// Exercício 3

// Faça 3 perguntas ao usuário, pedindo 3 notas.
// Calculem a média destas notas.

/*const num1 = Number(readlineSync.question('Insira uma nota'))
const num2 = Number(readlineSync.question('Insira outra nota'))
const num3 = Number(readlineSync.question('Insira mais uma nota'))

const media = (num1 + num2 + num3)/3
console.log(Sua média é ${media})*/

/*const valor1 = 5
const valor2 = 10

console.log(valor1 === valor2)
console.log(valor1 !== valor2)
console.log(valor1 > valor2)
console.log(valor1 >= valor2)
console.log(valor1 < valor2)
console.log(valor1 <= valor2)*/

// Exercício 4

// Peça para o usuário inserir dois números. compare estes números, e verifique se o primeiro número é 
// maior, menor, igual, etc do que o segundo.

/*const num1 = Number(readlineSync.question('Insira um número'))
const num2 = Number(readlineSync.question('Insira outro número'))

console.log(`${num1} é igual a ${num2}?`, num1 === num2)
console.log(`${num1} é diferente de ${num2}?` , num1 !== num2)
console.log(`${num1} é maior que ${num2}? `, num1 > num2)
console.log(`${num1} é maior ou igual a ${num2}? `, num1 >= num2)
console.log(`${num1} é menor que ${num2}? ` , num1 < num2)
console.log(`${num1} é menor ou igual a ${num2}? ` , num1 <= num2)*/

// Arrays




// Exercícios 4

//Crie um array compelo menos 5 raças de cachorro.
//Peça para o usuário inserir um número de 0 a 4.
//Imprima no console a raça correspondente à posição escolhida pelo usuário.



//Exercícios 5

//Número Positivo ou Negativo: Solicite um número do usuário e, em seguida, determine 
//se o número é positivo, negativo ou igual a zero. Exiba a mensagem correspondente.

/*const readlineSync = require('readline-sync')

let Number = leitor.question("Digite um número")
if(numero < 0) {
    alert("O valor informado é menor que zero");
}else {
    document.write(numero);
}*/

//Login Simples: Crie uma variável com uma senha (por exemplo, "1234"). Solicite ao 
//usuário que insira uma senha e verifique se a senha inserida corresponde à senha armazenada.
// Exiba uma mensagem de "Login bem-sucedido" ou "Senha incorreta".


//Calculadora Básica: Solicite ao usuário dois números e uma operação (por exemplo, +, -, *, /).
// Use if e else para executar a operação escolhida e exibir o resultado.

/*const readlineSync = require('readline-sync')

let leitor = require('readline-sync')

let valorUm = leitor.questionInt('Insira o primeiro valor: ')
let valorDois = leitor.questionInt('Insira o segundo valor: ')

let operacao = leitor.question("digite o simbolo da operação desejada: +, -, *, /: ")

if (operacao == "+"){
    console.log(`A soma é ${valorUm + valorDois}`);
} else if (operacao == "-"){
    console.log(`A subtração é ${valorUm - valorDois}`);
} else if (operacao == "*"){
    console.log(`A multiplicação é ${valorUm * valorDois}`);
} else if (operacao == "/"){
    console.log(`A Divisão é ${valorUm / valorDois}`);
} else {
    console.log(`Operação inexistente, tente novamente`)
} */   



//Maior de Três Números: Peça ao usuário para inserir três números e use if e else para determinar
// qual é o maior dos três. Em seguida, exiba o número maior.

/*const readlineSync = require('readline-sync')

let leitor = require('readline-sync')

let valor1 = leitor.questionFloat("Insira o primeiro valor: ")
let valor2 = leitor.questionFloat("Insira o segundo valor: ")
let valor3 = leitor.questionFloat("Insira o terceiro valor: ")

if (valor1 > valor2 > valor3){
    console.log(`0 ${valor1} é o maior número`);
} else if (valor2 > valor1 && valor2 > valor3){
    console.log(`0 ${valor2} é o maior número`);
} else if (valor3 > valor1 && valor3 > valor2){
    console.log(`0 ${valor1} é o maior número`);
}*/

//Transformar todos os códigos anteriores em funções com parâmetros e criar um menu switch case para 
//escolher e utilizar as funções.

//Escreva um programa que conte de 1 a 10 e, para cada número, exiba o resultado da multiplicação desse número por 5. 


//Crie um programa que gere a tabela de multiplicação de um número específico fornecido pelo usuário, indo de 1 a 10.

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for



/*const nome = "Jeferson"
let sobrenome = "Kuhn Dutra"
var idade = 36
console.log ("Meu nome é" , nome, sobrenome, "tenho", idade, "anos")

console.log (` Meu nome é ${nome} ${sobrenome}, e tenho ${idade} anos.`)*/

// Template string (tipo texto) não calcula
//const nome = "Jeferson Kuhn Dutra"


// Numbers (calcula valores)
/*const mes = 7
const temperatura = -3 
const num1 = 25
const num2 = 15

console.log (num1 + num2)*/

// Booleans
/*let souEstudante = false
let souProfessor = true*/

// Exercício ( crie uma variavel com o nome de vocês, a idade e uma variavel que diga se vocês são estudantes ou não. Imprima a frase no console).
/*const nome = "jeferson Kuhn"
const idade = 36
let souEstudante = true
let souProfessor = false

console.log (` Meu nome é ${nome}, e tenho ${idade} anos, você é estudante? ${souEstudante}.`)

console.log (` Meu nome é ${nome}, e tenho ${idade} anos, você é Professor? ${souProfessor}.`)*/

//string transformar em Numbers
/*const num1 = "50"
const num2 = "70"*/

// transformação
/*const newNum1 = Number(num1)
const newNum2 = Number(num2)
const soma = newNum1 + newNum2

console.log(soma)*/

// passando Numbers para strings
//const num3 = 5
//console.log(tipeof num3)
//const num

