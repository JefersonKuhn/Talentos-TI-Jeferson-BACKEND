USE catalogo_produtos

CREATE TABLE IF NOT EXISTS produtos (
   id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    descricao (text),
    preco DECIMAL (10,2)
);
