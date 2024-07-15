import { ListaDeProdutos } from "./ListaDeProdutos"
export interface Produto{
    nome:string
    preco:number
    peso:number
    calcularValor():number
}