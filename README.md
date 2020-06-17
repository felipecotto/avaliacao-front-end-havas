Esse projeto foi criado para o teste de Front End da Havas+

## Iniciando o projeto em ambiente local

Baixe o projeto em: https://github.com/felipecotto/avaliacao-front-end-havas

No diretório raiz rode o comando: 

### `yarn install`

Em seguida rode o comando:

### `yarn start`

A aplicação ira iniciar na no endereço: http://localhost:3000/ e pode ser visualizada no Browser.

## Dependências

Você precisa do Node e Npm instalado para executar o projeto.

## Sobre o Projeto

O Projeto usa o React como Lib de Javascript, para os estilos foi usado styled-components e para o consumo de apis axios. 

Link da publicação: 

### Possíveis otimizações

O Projeto pode ter uma melhor componentização, o consumo da API também deveria estar centralizado em um único lugar (Base URL) o que facilita a manutenção.
Adicionar loadings para melhorar os feedbacks para os usuários.
Separar os estilos em um arquivo de variaveis para centralizar a manutenção de cores, fonts, paddings. 

### O que você poderia ter melhorado

As rotas em geral, em alguns pontos por questão de tempo acabei usando o elemento <a></a> ao invés do <Link></Link> do react-router, isso deixaria a aplicação mais dinâmica sem refresh na tela.
A página de post precisa receber uma paginação também para não trazer os 100 posts de uma vez.
A busca pode ficar mais dinâmica e performática também.
As Features poderiam ter sido feitas em Branchs separadas. 

