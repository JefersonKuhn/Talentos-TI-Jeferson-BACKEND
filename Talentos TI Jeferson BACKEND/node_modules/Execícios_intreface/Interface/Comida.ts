
import {Produto} from './Produto'

export class Comida implements Produto {
    nome: string;
    preco:number
    peso: number;

    constructor(nomeDoPrato:string, valor:number, peso:number) {
        this.nome = nomeDoPrato;
        this.preco= valor;
        this.peso = peso;
    }
    
      precoDoPrato():void {
        console.log (`${this.preco}, O valor é de`)
     }
     tamanhoDoPrato():void {
        console.log(`${this.peso}, O tamanho do prato é de`)
     }

     calcularValor():number{
        return this.preco * 0.05
     }
}
