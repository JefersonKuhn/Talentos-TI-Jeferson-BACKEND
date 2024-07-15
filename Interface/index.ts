//Importar interfaces
import {Produto} from './Produto'
import {Pagamentos} from './Pagamentos'

import {Comida} from './Comida'
import {Bebidas} from './Bebidas'
import {Sobremesa} from './Sobremesa'

import {PagamentoCartao} from './PagamentoCartao'
import {PagamentoDinheiro} from './PagamentoDinheiro'
import {PagamentoPix} from './PagamentoPix'

const Produto1:Comida= new Comida('Feijoada', 15.00, 1)

const Produto2:Bebidas = new Bebidas('Cerveja', 10.00, 0.5)

const Produto3:Sobremesa = new Sobremesa('Pudim', 5.00, 0.2)

export class menu{
 Comida:string
 Bebidas:string
 Sobremesa:string

 const ListaDeProdutos = []
while (menu !== 4) {
    menu = Number(
    prompt(`===== Lista de Produtos =====

    1. Comidas

    2. Bebidas

    3. Sobremesa

    4. Sair

    Escolha uma opção:`)
  )
  


  switch (menu) {
    case 1:
        new Comida('Feijoada', 15.00, 1)
        break;
    case 2:
        new Bebidas('Cerveja', 10.00, 0.5)
        break;
    case 3:
         new Sobremesa('Pudim', 5.00, 0.2)
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
    if (Produtos.length === 0) {
        console.log("Ainda não existem produto cadastrados");
    } else {
        let mensagem =
`
      LISTAGEM DE PRODUTOS:

     --------------------------------------------------------------------

      COMIDAS      |    BEBIDAS       |   SOBREMESAS  |

     --------------------------------------------------------------------`;
    for (let ListaDeProdutos of Produtos) {
        mensagem += `\n   ${Produtos.Comidas} \t ${Produtos.Bebidas}  ${Produtos.Sobremesa}`
    }
    console.log(mensagem);
    }
}
}

const Pagamento1:PagamentoCartao= new PagamentoCartao()

const Pagamento2:PagamentoDinheiro= new PagamentoDinheiro()

const Pagamento3:PagamentoPix= new PagamentoPix()


let menu

export class Pagamentos = []
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
        new Pagamento1(PagamentoCartao)
        break;
    case 2:
        new Pagamento2(PagamentoDinheiro)
        break;
    case 3:
         new Pagamento3(PagamentoPix)
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