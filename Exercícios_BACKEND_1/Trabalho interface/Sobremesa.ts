import {Pagamentos } from "./Pagamentos"
import {Produto} from "./Produtos"

export class Sobremesa implements Produto {
    nome: string;
    preco:number
    peso: number;

    constructor(nomeDaSobremesa:string, valor:number, peso:number) {
        this.nome = nomeDaSobremesa;
        this.preco= valor;
        this.peso = peso;
    }
    
      nomeDaSobremesa():void {
        console.log (`${this.nome}, Nome da Sobremesa`)
     }
     precoDaSobremesa():void {
        console.log(`${this.preco}, O valor da sobremesa é de`)
     }

     calcularValor():number{
        return this.preco * 0.05
     }
}