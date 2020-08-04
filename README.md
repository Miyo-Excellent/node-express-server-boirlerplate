Pasos para correr el programa.
1. Requisitos del sistema:
    - **Node.js**: `https://nodejs.org/es/download/`
    - **MongoDB**: `https://www.mongodb.com/`
    
2. crear el archivo `.env` en la raiz del programa `(opcional)`, variables aceptadas:
    - **MODE**: `demo | production`
    - **PORT**: `3000 | INT`
    - **DB_MONGO_URL**: `mongodb://localhost:27017/mi_aguila_backend_test`
    - **SECRET_KEY**: `my_super_secret_key | STRING`
    - **TOKEN_EXPIRED_INTERVAL**: `30d`

3. comandos para correr el programa use `npm ó yarn`:
    - **Instalar dependencias**: `npm install | yarn`
    - **correr programa**: `npm start | yarn start`
    - **correr programa + supervisor nodemon**: `npm run nodemon | yarn run nodemon`

> El programa genera el archivo `/logs/app.log` alli encontrara todos los procesos realizados por el programa 
>
> Puede consular el archivo `/TEST.md` para ver los requerimientos. 
>
> [Entrar en el navegador y ver la demo](http://localhost:3000)
> 
> `http://localhost:3000` or `http://mi-domain:3000`
