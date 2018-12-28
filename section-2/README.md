# React + Webpack

## Sobre o webpack

* É um module bundler;
* Gerar arquivo final que será usado no HTML, em ES5;
* Subir servidor para desenvolvimento;
* Utilizar _react hot loader_ para agilizar o desenvolvmento.

## Instalação das dependências do Webpack

* Criar o package.json
* Instalar o webpack como dependencia de desenvolvimento

## Configuração básica do Webpack

* Criar arquivo webpack.config.js
* Configurar para ler um arquivo e gerar o _bundle_
* Criar o arquivo src/index.js
* Gerar o bundle
* Criar o arquivo index.html e adicionar bundle.js

## Usando o server do Webpack

* Instalar a dependência para o server - webpack-dev-server;
* Adicionar o _publicPath_ no webpack.config;
* Passar o caminho correto no index.html;
* Subir o server de desenvolvimento.

## Modularizando uma aplicação

* Criar um novo arquivo em src/app.js;
* Entender o require e o module.exports do CommonJS;
* Exportar um método _sum_, que irá somar dois valores;