CREATE TABLE IF NOT EXISTS prefeitos(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id int unsigned,
    primary key (id),
    unique key (cidade_id),
    FOREIGN key (cidade_id) REFERENCES cidades (id)
);