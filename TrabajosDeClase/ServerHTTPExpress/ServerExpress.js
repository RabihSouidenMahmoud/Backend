const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send ({mensaje : 'Hola mundo primer servidor con express'})
} )

const server = app.listen(8080 , () => {
    console.log('servidor http en el puerto 8080')
});

server.on('error' , error => console.log(`Error en el servidor  ${error}` ))