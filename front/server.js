const express = require("express");

const app = express();

const PORT = 3000;
//Utilizacion de archivos estaticos
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

