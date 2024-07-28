-- Criação da Tabela de Carros para Aluguel
--Para organizar de forma eficiente os dados dos carros disponíveis para aluguel:
--Implemente uma tabela indicada carros_aluguel para armazenar todas as informações necessárias.
--Cada carro deve ter pelo menos 6 atributos, incluindo o preço do aluguel por dia.

USE ti3k5791_jeferosonkuhn;

 CREATE TABLE carrosaluguel (
    id_locacao INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_veiculo INT NOT NULL,
    data_locacao DATE NOT NULL,
    valor_total DECIMAL(10,2),
    data_entrega DATE,
    quilometros_rodados INT
    );
    
    USE ti3k5791_jeferosonkuhn;

    INSERT INTO carrosaluguel (id_locacao, id_cliente, id_veiculo, data_locacao, valor_total, data_entrega, quilometros_rodados) VALUES
(1, 11, 21, 2016-04-21, 600, 2016-05-21, 116.000),
(2, 12, 22, 2017-05-22, 1000, 2017-08-23, 22.000),
(3, 13, 23, 2018-05-23, 300, 2018-06-12, 200.000),
(4, 14, 24, 2019-06-18, 450, 2019-07-16, 250.000),
(5, 15, 25, 2020-08-24, 2000, 2020-10-25, 70.000),
(6, 16, 26, 2021-02-21, 1500, 2021-03-21, 30.000);


--2. Inserção de Registros de Carros para Aluguel
--Insira pelo menos 10 registros na tabela carros_aluguel, detalhando todas as características mencionadas
--acima.
USE ti3k5791_jeferosonkuhn;

CREATE TABLE veiculos (
    id_veiculo INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR (7) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    cor VARCHAR(50) NOT NULL,
    ano INT NOT NULL,
    tipo_combustivel VARCHAR(50) NOT NULL,
    tipo_cambio VARCHAR(50) NOT NULL,
    potencia DECIMAL(5,2) NOT NULL,
    quilometragem INT NOT NULL,
    disponibilidade VARCHAR(10) NOT NULL
);

--3. Criação da Tabela de Clientes
--Você tem uma lista de clientes específicos no aluguel de carros.
USE ti3k5791_jeferosonkuhn;

CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cnh VARCHAR(9) NOT NULL,
    data_validade_cnh DATE NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL
);


--Crie uma tabela chamada clientespara armazenar informações relevantes sobre os clientes.
--Inclua pelo menos 5 atributos importantes para cada cliente.

--4. Inserção de Registros de Clientes
--Insira pelo menos 5 registros na tabela clientes, detalhando todas as características mencionadas acima.

--5. Criação da Tabela de Aluguéis de Carros
--Agora, você precisa controlar os aluguéis dos carros.

--Implemente uma tabela chamada alugueis_carrosque indique qual carro está sendo oferecido para qual cliente,
--além dos dados de início e término do aluguel, e o valor total do aluguel.
--Garanta a integridade dos dados e evite duplicações entre as tabelas anteriores.

--6. Inserção de Registros de Aluguéis de Carros
--Crie 30 registros na tabela alugueis_carrosque atendem às seguintes regras:
--Pelo menos 2 clientes deverão ter realizado 6 aluguéis cada.
--Pelo menos 3 clientes deverão ter realizado 4 aluguéis cada.

--7. Relatório de Gastos por Cliente
--Apresente uma lista de todos os clientes e o gasto total com base nos aluguéis de carros realizados.

--8. Relatório de Carros Mais Alugados
--Apresente uma lista de todos os carros e o total de vezes que cada carro foi oferecido.


INSERT INTO carrosaluguel (id_locacao, id_cliente, id_veiculo, data_locacao, valor_total, data_entrega, quilometros_rodados) VALUES
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