-- Crie uma base de dados com nome Desafio + nome do aluno.

-- Crie uma tabela para armazenar as características dos produtos, como nome, categoria, preço, etc.
-- A tabela deve conter uma coluna IDsequencial e única.
USE livraria_jeferson;

 CREATE TABLE Produtos (
    id_produto INT PRIMARY KEY,
    nome VARCHAR(100),
    preço DECIMAL(10, 2),
    estoque INT,
    perecível BOOLEAN,
    marca VARCHAR(50),
    nacionalidade VARCHAR(50)
);
-- O produto deve conter no mínimo 7 características armazenadas.
-- Crie 10 registros para a tabela criada (ID 1 a 10).
USE livraria_jeferson;

INSERT INTO Produtos (id_produto, nome, preço, estoque, perecível, marca, nacionalidade) VALUES
(1, 'nescau', 9.50, 100, true, 'nestle', 'Suica'),
(2, 'toddy', 8.75, 50, true, 'pepsico', 'Brasil'),
(3, 'chocolate', 4.99, 75, true, 'nestle', 'Suica'),
(4, 'ninho', 40.50, 30, false, 'nestle', 'Brasil'),
(5, 'cafe', 19.99, 200, false, 'pilao', 'Brasil'),
(6, 'arroz', 20.50, 100, true, 'nestle', 'Suica'),
(7, 'feijão', 9.75, 50, true, 'pepsico', 'Brasil'),
(8, 'massa', 4.99, 75, true, 'nestle', 'Suica'),
(9, 'polenta', 7.50, 30, false, 'nestle', 'Brasil'),
(10, 'farrinha', 19.99, 200, false, 'pilao', 'Brasil');

-- Exclui o 4º registro e o 7º registro da tabela.
USE livraria_jeferson;

DELETE FROM Produtos WHERE id_produto = 4 LIMIT 4;

DELETE FROM Produtos WHERE id_produto = 7 LIMIT 7;

-- Adicione uma coluna na tabela chamada Sem estoquepara armazenar se há o produto em estoque ou não 
--(sugestão:use BOOLEAN ou VARCHAR – verdadeiro ou falso).
USE livraria_jeferson;
ALTER TABLE Produtos
ADD COLUMN SemEstoque BOOLEAN;

-- Altere todos os registros, com exceção do ID 2, para identificar que está sem estoque.
USE livraria_jeferson;

ALTER TABLE Produtos ADD COLUMN id_produto DATE, ADD COLUMN SemEstoque;

-- Monte um relatório (um SELECT) dos 5 primeiros registros de acordo com a ordem de inserção
--(do menor ID para o maior ID) e de acordo com o status da coluna SemEstoque.

USE livraria_jeferson;

SELECT Produtos, CLIENTES.NOME, PEDIDOS.DATA
FROM CLIENTES, PEDIDOS
WHERE CLIENTES.CODIGO = PEDIDOS.CODCLIENTE
