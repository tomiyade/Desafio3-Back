const express = require("express");
const Contenedor = require("./contenedor");
const app = express();
const PORT = 8080;

const server = app.listen(process.env.PORT || PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
});

server.on("error", err => console.log(`error ${err}`));

const productos = new Contenedor("productos.txt");


app.get("/producto", async (req, res) => {
    const producto = await productos.getAll();
    res.send(producto)
});



app.get("/productoRandom", async (req, res) => {
    const producto = await productos.getAll();
    let numeroRandom = Math.floor(Math.random() * producto.length);
    res.send(producto[numeroRandom]);
});