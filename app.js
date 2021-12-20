// ENLACE A GITHUB: https://github.com/Omita-G-A/examen_ej4

// importamos el módulo express
const express = require("express");

// creamos la aplicación express llamando a la función express
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Express escuchando en puerto: " + PORT);
});

// establecemos el motor de plantilla ejs
app.set("view engine", "ejs");

// con la función static le decimos la carpeta donde "pillar" los archivos css, scripts, etc.
app.use(express.static("public"));

// aquí meto un arrray con los productos que tendrá que mostrar en el productos.ejs.
// Esto lo podríamos hacer desde un archivo externo, json o lo que sea, pero bueno.
const products = [
  {
    producto: "libro 0",
    precio: 15,
  },
  {
    producto: "libro 1",
    precio: 15,
  },
  {
    producto: "libro 2",
    precio: 20,
  },
  {
    producto: "libro 3",
    precio: 7,
  },
  {
    producto: "libro 4",
    precio: 45,
  },
  {
    producto: "guitarra",
    precio: 1500,
  },
  {
    producto: "pedal",
    precio: 280,
  },
  {
    producto: "pastilla",
    precio: 150,
  },
  {
    producto: "zapatos",
    precio: 150,
  },
  {
    producto: "ampli",
    precio: 1200,
  },
];

// métodos para enviar mediante el método GET el archivo correspondiente del html
// a los que hay que modificar la extensión para que funcione con EJS y usamos render en
// lugar de sendFile
app.get("/", (req, res) => {
  res.render("index", { title: "inicio" });
});

app.get("/products", (req, res) => {
  res.render("productos", { title: "Productos", products });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404... ☠" });
});
