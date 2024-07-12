import {Produto} from './Produto'

export class Bebidas implements Produto {
    nome: string;
    preco:number
    peso: number;

    constructor(nomeDaBebidas:string, valor:number, peso:number) {
        this.nome = nomeDaBebidas;
        this.preco= valor;
        this.peso = peso;
    }
    
      precoDaBebidas():void {
        console.log (`${this.preco}, O valor é de`)
     }
     tamanhoDoPrato():void {
        console.log(`${this.peso}, O tamanho do prato é de`)
     }

     calcularValor():number{
        return this.preco * 0.05
     }
}
