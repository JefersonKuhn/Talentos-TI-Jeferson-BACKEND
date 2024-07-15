import {Pagamentos } from "./Pagamentos"
import {Produto} from "./Produtos"
import {ListaDeProdutos} from "./ListaDeProdutos"
export class Bebidas implements Produto {
    nome: string;
    preco:number
    peso: number;

    constructor(nomeDaBebida:string, valor:number, peso:number) {
        this.nome = nomeDaBebida;
        this.preco= valor;
        this.peso = peso;
    }
    
      nomeDaBebida():void {
        console.log (`${this.nome}, Nome da Bebida`)
     }
     precoDoPrato():void {
        console.log(`${this.preco}, O valor da bebida é de`)
     }

     calcularValor():number{
        return this.preco * 0.05
     }
}