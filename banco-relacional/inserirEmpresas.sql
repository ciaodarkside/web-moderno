ALTER TABLE empresas MODIFY cnpj VARCHAR(20); --modifica cnpj para um varchar de 20 caracteres

INSERT INTO empresas
    (nome, cnpj)

VALUES
    ('Bradesco', 12345677893),
    ('Vale', 453453453453),
    ('Cielo', 42434324324);

desc empresas; --descreve o conteúdo da tabela

select * from empresas;

select * from cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);

select * from empre