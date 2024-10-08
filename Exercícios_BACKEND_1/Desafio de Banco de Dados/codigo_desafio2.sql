-- Crie uma base de dados com nome Desafio2 + JefersonKuhn.
CREATE DATABASE Desafio2_JefersonKuhn;

-- Uso do banco de dados criado
USE Desafio2_JefersonKuhn;

-- Criação da Tabela de Carros para Aluguel
--Para organizar de forma eficiente os dados dos carros disponíveis para aluguel:
--Implemente uma tabela indicada carros_aluguel para armazenar todas as informações necessárias.
--Cada carro deve ter pelo menos 6 atributos, incluindo o preço do aluguel por dia.
CREATE TABLE carros_aluguel (
    id_carro INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    ano INT NOT NULL,
    cor VARCHAR(20),
    preco_por_dia DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'disponível'
);


--2. Inserção de Registros de Carros para Aluguel
--Insira pelo menos 10 registros na tabela carros_aluguel, detalhando todas as características mencionadas
--acima.
INSERT INTO carros_aluguel (marca, modelo, ano, cor, preco_por_dia, status)
VALUES
('Toyota', 'Corolla', 2020, 'Prata', 150.00, 'disponível'),
('Honda', 'Civic', 2019, 'Preto', 140.00, 'disponível'),
('Ford', 'Fusion', 2018, 'Branco', 160.00, 'disponível'),
('Chevrolet', 'Onix', 2021, 'Vermelho', 130.00, 'disponível'),
('Renault', 'Kwid', 2020, 'Azul', 120.00, 'disponível'),
('Fiat', 'Uno', 2017, 'Verde', 100.00, 'disponível'),
('Volkswagen', 'Polo', 2019, 'Amarelo', 140.00, 'disponível'),
('Hyundai', 'HB20', 2020, 'Prata', 130.00, 'disponível'),
('Nissan', 'Versa', 2021, 'Preto', 150.00, 'disponível'),
('Jeep', 'Renegade', 2020, 'Branco', 170.00, 'disponível');

--Crie uma tabela chamada clientes para armazenar informações relevantes sobre os clientes.
--Inclua pelo menos 5 atributos importantes para cada cliente.
CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(150),
    data_nascimento DATE
);
--4. Inserção de Registros de Clientes
--Insira pelo menos 5 registros na tabela clientes, detalhando todas as características mencionadas acima.
INSERT INTO clientes (nome, email, telefone, endereco, data_nascimento)
VALUES
('Ana Silva', 'ana.silva@gmail.com', '11999999999', 'Rua A, 123', '1985-05-20'),
('Carlos Souza', 'carlos.souza@hotmail.com', '11988888888', 'Rua B, 456', '1990-07-15'),
('Mariana Lima', 'mariana.lima@yahoo.com', '11977777777', 'Rua C, 789', '1992-03-10'),
('Pedro Oliveira', 'pedro.oliveira@outlook.com', '11966666666', 'Rua D, 101', '1988-12-25'),
('Julia Santos', 'julia.santos@live.com', '11955555555', 'Rua E, 202', '1995-08-30');

--5. Criação da Tabela de Aluguéis de Carros
--Agora, você precisa controlar os aluguéis dos carros.

--Implemente uma tabela chamada alugueis_carros que indique qual carro está sendo oferecido para qual cliente,
--além dos dados de início e término do aluguel, e o valor total do aluguel.
--Garanta a integridade dos dados e evite duplicações entre as tabelas anteriores.
CREATE TABLE alugueis_carros (
    id_aluguel INT PRIMARY KEY AUTO_INCREMENT,
    id_carro INT,
    id_cliente INT,
    data_inicio DATE NOT NULL,
    data_termino DATE NOT NULL,
    valor_total DECIMAL(10, 2),
    FOREIGN KEY (id_carro) REFERENCES carros_aluguel(id_carro),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);
--6. Inserção de Registros de Aluguéis de Carros
--Crie 30 registros na tabela alugueis_carrosque atendem às seguintes regras:
--Pelo menos 2 clientes deverão ter realizado 6 aluguéis cada.
--Pelo menos 3 clientes deverão ter realizado 4 aluguéis cada.
INSERT INTO alugueis_carros (id_carro, id_cliente, data_inicio, data_termino, valor_total)
VALUES
-- Aluguéis para o Cliente 1
(1, 1, '2024-07-01', '2024-07-07', 1050.00),
(2, 1, '2024-07-10', '2024-07-15', 700.00),
(3, 1, '2024-07-18', '2024-07-24', 1120.00),
(4, 1, '2024-07-25', '2024-07-30', 650.00),
(5, 1, '2024-08-01', '2024-08-05', 600.00),
(6, 1, '2024-08-10', '2024-08-15', 850.00),
-- Aluguéis para o Cliente 2
(1, 2, '2024-07-01', '2024-07-07', 1050.00),
(2, 2, '2024-07-10', '2024-07-15', 700.00),
(3, 2, '2024-07-18', '2024-07-24', 1120.00),
(4, 2, '2024-07-25', '2024-07-30', 650.00),
(5, 2, '2024-08-01', '2024-08-05', 600.00),
(6, 2, '2024-08-10', '2024-08-15', 850.00),
-- Aluguéis para o Cliente 3
(1, 3, '2024-07-01', '2024-07-05', 750.00),
(2, 3, '2024-07-06', '2024-07-10', 700.00),
(3, 3, '2024-07-11', '2024-07-15', 700.00),
(4, 3, '2024-07-16', '2024-07-20', 650.00),
-- Aluguéis para o Cliente 4
(1, 4, '2024-07-01', '2024-07-05', 750.00),
(2, 4, '2024-07-06', '2024-07-10', 700.00),
(3, 4, '2024-07-11', '2024-07-15', 700.00),
(4, 4, '2024-07-16', '2024-07-20', 650.00),
-- Aluguéis para o Cliente 5
(1, 5, '2024-07-01', '2024-07-05', 750.00),
(2, 5, '2024-07-06', '2024-07-10', 700.00),
(3, 5, '2024-07-11', '2024-07-15', 700.00),
(4, 5, '2024-07-16', '2024-07-20', 650.00);
--7. Relatório de Gastos por Cliente
--Apresente uma lista de todos os clientes e o gasto total com base nos aluguéis de carros realizados.
SELECT c.nome, SUM(a.valor_total) AS total_gasto
FROM clientes c
JOIN alugueis_carros a ON c.id_cliente = a.id_cliente
GROUP BY c.nome
ORDER BY total_gasto DESC;
--8. Relatório de Carros Mais Alugados
--Apresente uma lista de todos os carros e o total de vezes que cada carro foi oferecido.
SELECT ca.marca, ca.modelo, COUNT(a.id_aluguel) AS total_alugueis
FROM carros_aluguel ca
JOIN alugueis_carros a ON ca.id_carro = a.id_carro
GROUP BY ca.marca, ca.modelo
ORDER BY total_alugueis DESC;

