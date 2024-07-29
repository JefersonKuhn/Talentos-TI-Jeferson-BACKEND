-- Crie uma base de dados com nome Desafio1 + JefersonKuhn.
CREATE DATABASE Desafio1_JefersonKuhn;

-- Uso do banco de dados criado
USE Desafio1_JefersonKuhn;

-- Crie uma tabela para armazenar as características dos produtos, como nome, categoria, preço, etc.
-- A tabela deve conter uma coluna IDsequencial e única.
CREATE TABLE Produtos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(50),
    Categoria VARCHAR(50),
    Preco DECIMAL(10, 2),
    Descricao VARCHAR(255),
    Fabricante VARCHAR(50),
    DataFabricacao DATE,
    Validade DATE
);

-- O produto deve conter no mínimo 7 características armazenadas.
-- Crie 10 registros para a tabela criada (ID 1 a 10).
INSERT INTO Produtos (Nome, Categoria, Preco, Descricao, Fabricante, DataFabricacao, Validade)
VALUES
('Produto 1', 'Categoria 1', 10.00, 'Descrição 1', 'Fabricante 1', '2023-01-01', '2024-01-01'),
('Produto 2', 'Categoria 2', 20.00, 'Descrição 2', 'Fabricante 2', '2023-02-01', '2024-02-01'),
('Produto 3', 'Categoria 3', 30.00, 'Descrição 3', 'Fabricante 3', '2023-03-01', '2024-03-01'),
('Produto 4', 'Categoria 4', 40.00, 'Descrição 4', 'Fabricante 4', '2023-04-01', '2024-04-01'),
('Produto 5', 'Categoria 5', 50.00, 'Descrição 5', 'Fabricante 5', '2023-05-01', '2024-05-01'),
('Produto 6', 'Categoria 6', 60.00, 'Descrição 6', 'Fabricante 6', '2023-06-01', '2024-06-01'),
('Produto 7', 'Categoria 7', 70.00, 'Descrição 7', 'Fabricante 7', '2023-07-01', '2024-07-01'),
('Produto 8', 'Categoria 8', 80.00, 'Descrição 8', 'Fabricante 8', '2023-08-01', '2024-08-01'),
('Produto 9', 'Categoria 9', 90.00, 'Descrição 9', 'Fabricante 9', '2023-09-01', '2024-09-01'),
('Produto 10', 'Categoria 10', 100.00, 'Descrição 10', 'Fabricante 10', '2023-10-01', '2024-10-01');

-- Exclui o 4º registro e o 7º registro da tabela.
DELETE FROM Produtos WHERE ID = 4;
DELETE FROM Produtos WHERE ID = 7;

-- Adicione uma coluna na tabela chamada Sem estoquepara armazenar se há o produto em estoque ou não 
--(sugestão:use BOOLEAN ou VARCHAR – verdadeiro ou falso).
ALTER TABLE Produtos ADD COLUMN SemEstoque BOOLEAN;

-- Altere todos os registros, com exceção do ID 2, para identificar que está sem estoque.
UPDATE Produtos SET SemEstoque = TRUE WHERE ID <> 2;

-- Monte um relatório (um SELECT) dos 5 primeiros registros de acordo com a ordem de inserção
--(do menor ID para o maior ID) e de acordo com o status da coluna SemEstoque.
SELECT * FROM Produtos
ORDER BY ID
LIMIT 5;