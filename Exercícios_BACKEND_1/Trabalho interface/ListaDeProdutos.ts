import { Bebidas } from "./Bebidas"
import { Comida } from "./Comidas"
import { Sobremesa } from "./Sobremesa"


export let Produtos = []

// Variáveis
let menu
 Comida
 Bebidas
 Sobremesa
export const ListaDeProdutos = []
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
        new Comida()
        break;
    case 2:
        new Bebidas()
        break;
    case 3:
         new Sobremesa()
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