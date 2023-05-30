# INSTRUÇÕES PARA RODAR O PROJETO

## 1. Instalar dependências

```bash
$ npm i
```
## 2. Configurar banco de dados
Crie um banco de dados MySQL e configure o arquivo .env com as credenciais. (O arquivo .env.example pode ser usado como base)

## 3. Executar migrações no banco de dados

```bash
$ npx prisma migrate dev
```

## 4. Rodar a aplicação

```bash
$ npm run dev
```
