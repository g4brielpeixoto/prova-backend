# INSTRUÇÕES PARA RODAR O PROJETO

## 1. Instalar dependências

```bash
$ npm i
```
## 2. Configurar banco de dados
Crie um banco de dados MySQL e configure o arquivo .env com as credenciais. (O arquivo .env.example pode ser usado como base)

Se usa docker basta rodar o comando abaixo:
```bash
$ docker run -p 3306:3306 --name meu-mysql -e MYSQL_ROOT_PASSWORD=sua_senha_padrao --restart always -d mysql:latest
```

## 3. Executar migrações no banco de dados

```bash
$ npx prisma migrate dev
```

## 4. Rodar a aplicação

```bash
$ npm run dev
```


