/*let nome:string = 'leonardo'

let idade:number = 29

let souEstudante:boolean = false
console.log(`meu nome é ${nome} e tenho ${idade} ano. Sou estudante? ${souEstudante}`)*/
// Criem uma função que pede nome, idade, e se tem carteira de motorista.
// usar readline-sync
/*import * as readlinesync from 'readline-sync';

// EXERCÍCIO 1
let nome:string = readlinesync.question('Qual é o seu nome? ')
let idade:number = Number(readlinesync.question('Qual sua idade? '))
let temCarteira: string = readlinesync.question('Você possui carteira de motorista? (sim / não) ')

function podeDirigir (myName:string,myIdade:number,myTemCarteira: string):void{
if (idade >= 18 && temCarteira === 'sim') {
    console.log(`${nome} você pode dirigir. `);
} else {
    console.log(`${nome}você não pode dirigir. `);
}
}

podeDirigir(nome, idade, temCarteira);*/
// ARRAY TIPOS
//let arr: Array<number> = [1,2,3]
//let array: number = [1,2,3]
// OBJETO
/*let person:{name: string, age: number} =
{
    name: 'Jeferson'
    age: 29

}*/
// TIPAR 
/*function soma (num1:number,num2:number):number{
    return num1 + num2
}

function frase (nome:string):string{
    return `ola ${nome}, tudo bem?`
}

function chamaAlgo (nome:string): void{console.log('Eai' ${nome})


function desconto (preco:number, desconto:number = 0.05):number {
    return preco * (1 - desconto)
    console.log(desconto)
}

function frase (nome:string = 'João', idade:number = 40): void{
    console.log(`Óla ${nome}, você tem ${idade} anos.`)
}
frase ('Leo',29)*/
// EXERCÍCIO 2
// Estou criando um "molde" para objetos do tipo cachorro
/*class Cachorro {
 nome:string
 peso:number
 pelagem:string
 raca:string


  constructor(nome:string, peso:number, pelagem:string){
    this.nome = nome
    this.peso = peso
    this.pelagem = pelagem
    this.raca = 'Golden'
 }
  latir():void {
    console.log('AU AU')
 }
  correr():void {
    console.log ('O cachorro está correndo. ')
 }
 comer():void {
    console.log('O cachorro está comendo.')
 }
}

const meuCachorro:Cachorro = new Cachorro('Nala',13,'amarela')
const meuOutroCachorro:Cachorro = new Cachorro('Margot',10,'ampreta')
//Assim chama um atributo
console.log(meuCachorro.nome)

//Assim chamamos um método
meuCachorro.latir()
meuOutroCachorro.latir()*/
// Criem uma classe Coruja
//3 atributos
//3 métados
//Não esqueça do constructor
//Depois que criarem a classe, intancíe dois objetos coruja e chame os métodos
var Coruja = /** @class */ (function () {
    function Coruja(nome, altura, especie, habilidade) {
        this.nome = nome;
        this.altura = altura;
        this.especie = especie;
        this.habilidade = 'voo e caça';
        altura();
        void {
            console: console,
            : .log(35)
        };
        especie();
        void {
            console: console,
            : .log('Coruja-das-torres (Tyto furcata). ')
        };
        habilidade();
        void {
            console: console,
            : .log('voo e caça.')
        };
    }
    return Coruja;
}());
var Coruja = new Coruja('Coruja-das-torres', 35, 'Tyto furcata', 'voo e caça');
console.log(Coruja.nome);
