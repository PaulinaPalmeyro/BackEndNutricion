
//importamos los modelitos
const PruebaAfectiva = require('../models/pruebaAfectiva');
const PruebaDescriptiva = require('../models/pruebaDescriptiva');
const General = require('../models/general');

//service funcion para crear un nuevo documento para prueba afectiva
const createPruebaAfectiva = async (data) => {
  const pruebaAfectiva = new PruebaAfectiva(data);
  return await pruebaAfectiva.save();
};

//service funcion para crear un nuevo documento para prueba descriptiva
const createPruebaDescriptiva = async (data) => {
  const pruebaDescriptiva = new PruebaDescriptiva(data);
  return await pruebaDescriptiva.save();
};

//service funcion para crear un nuevo documento para prueba general
const createGeneral = async (data) => {
  const general = new General(data);
  return await general.save();
};

//para obtener todos los documentos de pruebas afectivas
const getAllPruebasAfectivas = async () => {
  return await PruebaAfectiva.find();
};

//para obtener todos los documentos de pruebas descriptivas
const getAllPruebasDescriptivas = async () => {
  return await PruebaDescriptiva.find();
};

//para obtener todos los documentos de pruebas generales
const getAllGenerales = async () => {
  return await General.find();
};

//exportamossss
module.exports = {
  createPruebaAfectiva,
  createPruebaDescriptiva,
  createGeneral,
  getAllPruebasAfectivas,
  getAllPruebasDescriptivas,
  getAllGenerales
};
