import { MetodosDePagamento } from "./MétodosDePagamento "

 let Pagamento = []

// Variáveis
let menu

export const Pagamentos = []
while (menu !== 4) {
    menu = Number(
    prompt(`===== ESCOLHA A FORMAS DE PAGAMENTOS =====

    1. DINHEIRO

    2. CARTÃO DE CREDITO

    3. PIX

    4. Sair

    Escolha uma opção:`)
  )
  


  switch (menu) {
    case 1:
        new dinheiro()
        break;
    case 2:
        new cartaoDeCredito()
        break;
    case 3:
         new pix()
        break;
    case 4:
        console.log("Obrigado por acessar este sistema")
        break;
    default:
        console.log("Não existe essa opção no menu!")
        break;
  }
    

}
function listar() {
    if (Pagamento.length === 0) {
        console.log("Ainda não existem pagamentos");
    } else {
        let mensagem =
`
      FORMAS DE PAGAMENTOS:

     --------------------------------------------------------------------

      DINHEIRO      |    CARTÃO DE CREDITO       |   PIX  |

     --------------------------------------------------------------------`;
    for (let FormasDePagamento of Pagamento) {
        mensagem += `\n   ${Pagamentos.dinheiro} \t ${Pagamentos.cartaoDeCredito}  ${Pagamentos.pix}`
    }
    console.log(mensagem);
    }
}