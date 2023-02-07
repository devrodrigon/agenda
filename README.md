# DESAFIO FULLSTACK

## SOBRE O DESAFIO

Este teste consiste em criar um pequeno cadastro de clientes com vínculo de contatos, depois mostrar
o cliente e seus contatos vinculados.

Você deverá criar um cadastro de clientes que poderá conter muitos contatos associados. Depois deste
processo deverá ter um relatório em tela, ou PDF que mostre dados do cliente e os contatos
vinculados a este cliente.

## EXECUTAR A APLICAÇÂO

```bash
# Fazer o clone do projeto
git clone git@github.com:devrodrigon/agenda.git

# Acesse a pasta do projeto no terminal/cmd
cd agenda

# Rodar o servidor da api
# Acesse a pasta do servidor
cd server

# Instale as dependências
yarn

# Rode as migrations
yarn prisma migrate deploy

# Execute o servidor da api em modo de desenvolvimento
yarn dev

# Abra outra aba no terminal
# Rodar o sevidor web
# Acesse a pasta do servidor web
cd web

# Instale as dependências
yarn

# Execute o servidor web em modo de desenvolvimento
yarn dev

# O servidor inciará na porta:5173 - acesse <http://localhost:5173>

```
