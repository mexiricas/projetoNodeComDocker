# Campanha   
npm install     

## Pré requisitos
 npm i express mustache-express dotenv    
 npm i nodemon typescript ts-node     
 npm i --save-dev @types/express @types/mustache-express @types/node    


 ### Instalação    

instalar somente o docke da pasta banco de dados 
 docker-compose -up


### Ainda não resolvi como criar a table dinamicamente entao crie a tabela    
###  Aguarde ate o fim do precesso do docker   

CREATE TABLE campanha (
	id INT auto_increment NOT NULL,       
	nome varchar(100) NULL,   
	dataCadastro TIMESTAMP NULL,    
	dataInicio TIMESTAMP NULL,    
	dataFim TIMESTAMP NULL,     
	status BOOLEAN NULL,     
	categoria varchar(100) NULL,    
	CONSTRAINT campanha_pk PRIMARY KEY (id)     
);
