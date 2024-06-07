const mongoose = require('mongoose'); //importamos mongoose

// creamos el esquema de prueba descriptiva
const GeneralSchema = new mongoose.Schema({
  estrellas_general: { type: Number, required: true },
  volver_consumir: { type: Number, required: true }
});

//exportamos el modelito
module.exports = mongoose.model('General', GeneralSchema);
