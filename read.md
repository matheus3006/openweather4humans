# Tech4Humans
---
### Tecnologias: Nodejs,PostgressSQL,ReactJs 

-__SOBRE A APLICAÇÃO__:
- Está aplicação é um teste recebido pela empresa **[Tech4Humans](https://www.tech4h.com.br/)**;

- Utiliza a API [OpenWeatherMap](https://openweathermap.org/api) para buscar os dados de: nome da cidade, sigla do país, temperatura, umidade,
 decrição do tempo e clima;

- Utiliza [ElephantSQL](https://www.elephantsql.com/) para armazenar o banco de dados PostgreSQL;
__Tabela Criada no ElephantSQL__:
---
    CREATE TABLE IF NOT EXISTS cityWeather(
	id SERIAL PRIMARY KEY,
	name VARCHAR(200) NOT NULL,
	country VARCHAR(150) NOT NULL,
	temperature   FLOAT NOT NULL,
    humidity FLOAT NOT NULL,
	weather VARCHAR(50) NOT NULL,
	description VARCHAR(200) NOT NULL
);
---

 **Rotas da aplicação:**
__[Front-end](http://localhost:3000): http://localhost:3000/__
---
__Back-end__:
--
    :*[Get](http://localhost:5000/api/v1/weather/city/:city)*:__http://localhost:5000/api/v1/weather/city/:city__ Retorna os dados buscados da cidade escolhida;
--
    :*[Get](http://localhost:5000/api/v1/weather/most_searched)*:__http://localhost:5000/api/v1/weather/most_searched__ Retorna os dados que mais foram pesquisados e quantas vezes;
--
    :*[Get](http://localhost:5000/api/v1/weather/last_searched)*:__http://localhost:5000/api/v1/weather/last_searched__ Retorna as ultimas cidades pesquisadas (**Não repete valores**);
--
    :*[Get](http://localhost:5000/api/v1/weather)*:__http://localhost:5000/api/v1/weather__ Retorna todos os dados salvos no banco de dados e 
    total de dados salvos(**Rota não utilizada no frontend**);

---
### **Instruções para executar o projeto:** 

**1) Clone o projeto em uma pasta:**
Basta utilizar em seu terminal:
`git clone https://github.com/matheus3006/openweather4humans.git`

**2) Baixe as dependências para poder rodar o projeto:**
Foi criado o diretório `openweather4humans/`, após a clonagem.

---  
####Entre então no novo diretório:  
#####*Comandos no Terminal*:  
 Digite: `cd openweather4humans/`
 Utilize npm ou yarn para instalar as depencias do backend: ` npm install `  
 
 Agora adicione as depencias do front-end: 
    -Primeiro entre no diretorio : ` cd client/`  
    -Utilize: `npm install`,   
    -Após instalar as depencias utilize: `cd ..`, para voltar ao diretório anterior  
    -Para finalizar: `npm run dev`  

***Ambos Back-end e Front-end estarão inicializados***
---
 `Para atualizar ou mostrar os valore em Cidades mais Pesquisadas E Ultimas cidades pesquisas basta clicar no icone de atualização`  
---

::: 
*(c) Código e documentação*: **Matheus de Souza**
:::
