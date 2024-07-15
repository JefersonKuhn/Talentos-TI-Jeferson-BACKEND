import {Pagamentos } from "./Pagamentos"


  export class PagamentoCartao  implements Pagamentos {
   length: number

   pagar(): void {
      console.log('Pagamento no cartão realizado.')
   }
        
}
