# Campanha   
npm install     

## Pré requisitos
 npm i express mustache-express dotenv joi  
 npm i nodemon typescript ts-node     
 npm i --save-dev @types/express @types/mustache-express @types/node    
 npm i express-handlebars body-parser  sequelize  sequelize sqlite3 
 npm i jsonwebtoken
 npm i @types/jsonwebtoken

 ### Instalação    
 	docker-compose -up -d
	Agora a conexao dentro do containaer esta funcionando 
	Falta cria a database e as tabelas dinamicamente 


### criar tabelas via linha de comando sequelize cli 
	npx sequelize db:create ## cria a data base
	npx sequelize migration:generate --name campanha ## cria uma migration Objeto que sera uma Entidade de Banco
	npx sequelize db:migrate ## Cria as tabelas no banco de dados a partir das migrations que foram preenchidas

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
