const express = require("express");
const app = express();

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

// Función para iniciar el servidor
const startListening = () => {
  const port = 3000;
  app.listen(port, () => {
    console.log(`🚀 App listening on the port ${port}`);
  });
};

// Método inicial para iniciar la aplicación
const startApp = () => {
  startListening();
};

// Llama a startApp para iniciar el servidor al cargar el archivo
startApp();

module.exports = startApp;
