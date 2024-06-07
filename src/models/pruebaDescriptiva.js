const mongoose = require('mongoose'); //importamos mongoose

// creamos el esquema de prueba descriptiva
const PruebaDescriptivaSchema = new mongoose.Schema({
  sensaciones: { type: String, required: true },
  textura_morder: { type: Number, required: true },
  aspecto_irregularidad: { type: String, required: true },
  sensacion_granulado_arenoso: { type: Number, required: true },
  aroma: { type: String, required: true },
  sabor_predominante: { type: String, required: true },
  crujiente: { type: Number, required: true }
});

//exportamos el modelito
module.exports = mongoose.model('PruebaDescriptiva', PruebaDescriptivaSchema);
