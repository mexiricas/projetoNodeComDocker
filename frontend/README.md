# Campanha   
npm install     

## Pré requisitos
 npm i express mustache-express dotenv    
 npm i nodemon typescript ts-node     
 npm i --save-dev @types/express @types/mustache-express @types/node    


 ### Instalação
 docker-compose -up


## Ainda não resolvi como criar a table dinamicamente entao crie a tabela 
CREATE TABLE campanha (
	id INT NOT NULL,
	nome varchar(100) NULL,
	dataCadastro TIMESTAMP NULL,
	dataInicio TIMESTAMP NULL,
	dataFim TIMESTAMP NULL,
	status INT NULL,
	categoria varchar(100) NULL,
	CONSTRAINT campanha_pk PRIMARY KEY (id)
)

ALTER TABLE CAMPANHA.campanha MODIFY COLUMN id int auto_increment NOT NULL;