Instalação das libs e bibliotécas.
## npm init -y
## npm i fastify
## npm install typescript -D

iniciar arquivo de configuração typescript.
## npx tsc --init

instalar lib de start para typescript
## npm i tsx -D

instalando ORM do Prisma em modo dev
## npm i -D prisma

instalar o client 
## npm i @prisma/client

iniciar o prisma definindo SQLite como data base padrão.
## npx prisma init --datasource SQLite

rodar comando de migration a cada alteração feita nas tabelas ou coleções.
## npx prisma migrate dev

para abrir no navegador uma interface de interação com suas tabelas.
## npx prisma studio

instalando cors do fastify
## npm i @fastify/cors

rodar o projeto
## npm run dev

instalar criador de diagramas
## npm i -D prisma-erd-generator @mermaid-js/mermaid-cli
no arquivo schema.prisma adicionar 
## generator erd {
##  provider = "prisma-erd-generator"
## }
para gerar o diagrama rodar o comando
## npx prisma generate

popilar tabela com seed
## npx prisma db seed

biblioteca para validar 
## npm i zod

lidando com datas
## npm i dayjs