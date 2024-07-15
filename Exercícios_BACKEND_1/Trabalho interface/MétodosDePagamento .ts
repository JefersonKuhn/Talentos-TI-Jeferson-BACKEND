import {Pagamentos } from "./Pagamentos"

export class MetodosDePagamento  implements Pagamentos {
    dinheiro:number;
    cartaoDeCredito:number;
    pix: number;

    constructor(dinheiro:number, cartaoDeCredito:number, pix:number) {
        this.dinheiro = dinheiro;
        this.cartaoDeCredito= cartaoDeCredito;
        this.pix = pix;
    }
   pagar(): void {
      throw new Error("Method not implemented.");
   }
   calcularTaxas(): number {
      throw new Error("Method not implemented.");
   }
    
      valorNoDinheiro():void {
        console.log (`${this.dinheiro}, Pode ser em dinheiro`)
     }
     valorNoCartao():void {
        console.log(`${this.cartaoDeCredito}, No cartão de credito`)
     }
     valorNoPix():void {
       console.log(`${this.pix}, No pix`)
     }
     
}
