
//Cargamos el objeto express
const express = require("express");

//Instancio express dentro de la constante app para desde app tener todos los métodos 
//y propiedades de express
const app = express();

//A partir de esta línea, vamos a poder ejecutar archivos JSON en nuestro backend de express
app.use(express.json());

const PORT = 5000;


app.get('/', (req, res) => {
    res.send("hola don jose")
})


app.get('/search/:food', (req, res) => {
    //Ejemplo por params
    let criterio = req.params.food;

    res.send(`Te has comprado una ${criterio}`);
})

app.get('/contact', (req, res) => {

    console.log(req.query);

    res.send(`${req.query.nombre}`);
})

app.post('/about', (req, res) => {

//Ejemplo por body
let alumno1 = req.body.alumno1;
let alumno3 = req.body.alumno3;

    res.json({
        "Hola" : alumno1,
        "Te odio " : alumno3
    })
})



app.listen(PORT, 
    () => {
        console.log("Servidor levantado y funcionando en el puerto ", PORT);
    }    
);