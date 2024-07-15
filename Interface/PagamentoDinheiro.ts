import {Pagamentos } from "./Pagamentos"

export class PagamentoDinheiro  implements Pagamentos {
    pagar(): void {
        console.log('Pagamento em dinheiro realizado.')
     }
          
  }