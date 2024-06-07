const express = require('express'); //importamos express, mongoose, formeoutes y las variables de entorno
const mongoose = require('mongoose');
const formRoutes = require('./routes/formRoutes');
require('dotenv').config();
const cors = require('cors');

const app = express(); //inicializamos express

const PORT = process.env.PORT || 3000; //puerto
const MONGO_URI = process.env.MONGO_URI; //cargamos uri de db (env)


app.use(express.json());//middleware para que express entienda json
app.use(cors()); //seteamos la ruta base para la api y asociamos 
app.use('/api', formRoutes);


mongoose.connect(MONGO_URI) //CONECTAMOS LA DB ESO ESO ESO
  .then(() => {
    console.log('Connected to MongoDB iujuuuuuu');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`); //logcito para ver si funciona
    });
  })
  .catch((error) => {
    console.error(':( Error connecting to MongoDB:', error.message); //logcito que no queremos ver
    process.exit(1); // Exiteamos con un error
  });
