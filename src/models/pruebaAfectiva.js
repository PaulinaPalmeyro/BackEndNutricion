const mongoose = require('mongoose'); //importamos mongoose

// creamos el esquema de prueba afectiva
const PruebaAfectivaSchema = new mongoose.Schema({
  apariencia: { type: Number, required: true },
  aroma: { type: Number, required: true },
  sabor: { type: Number, required: true },
  textura_boca: { type: Number, required: true }
});

//exportamos el modelito
module.exports = mongoose.model('PruebaAfectiva', PruebaAfectivaSchema);
