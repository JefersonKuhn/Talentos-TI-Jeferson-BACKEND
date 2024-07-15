import {Pagamentos } from "./Pagamentos"
import {Produto} from "./Produtos"

export class Comida implements Produto {
    nome: string;
    preco:number
    peso: number;

    constructor(nomeDoPrato:string, valor:number, peso:number) {
        this.nome = nomeDoPrato;
        this.preco= valor;
        this.peso = peso;
    }
    
      nomeDoPrato():void {
        console.log (`${this.nome}, Nome do prato`)
     }
     precoDoPrato():void {
        console.log(`${this.preco}, O valor do prato é de`)
     }

     calcularValor():number{
        return this.preco * 0.05
     }
}