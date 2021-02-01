/* -- NODE --
const http = require('http');

const hostname = '127.0.0.1';  //URL local
const port = 3000;  //puerto donde recibe peticiones

//Funciones Flecha --> Arrow function  ==  recibe un requerimiento(req) del cliente y devuelve una respuesta(res)
const server = http.createServer((req, res) => {
  res.statusCode = 200;  //res del servidor referente a la peticion  
  res.setHeader('Content-Type', 'text/plain');  //cabeceras, define el tipo de contenido va a recibir una funcion y un formato de respuesta
  res.end('Hello World');
});

// configura en que puerto y como va escuchar el servidor y retorna una función/Callback que ejecuta una acción
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
---- */

/* -- EXPRESS --*/
const express = require('express');
const path = require('path');
const app = express(); //instanciamos express como función

app.set('port', 4000);
app.use(express.json()); //formato en que se reciben los archivos (json)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

app.use('/pagina2', (req, res) => {
  res.sendFile(path.join(__dirname, './public/pagina2.html'))
});

// app.get('/', (req, res) => {
//   res.send('Hello World!!')
// });

app.listen(app.get('port'), () => {
  console.log(`Server on port 4000`)
});