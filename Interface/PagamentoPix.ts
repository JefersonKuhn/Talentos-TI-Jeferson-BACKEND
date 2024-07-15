import {Pagamentos } from "./Pagamentos"

export class PagamentoPix  implements Pagamentos {
    pagar(): void {
        console.log('Pagamento no PIX realizado.')
     }
          
  }