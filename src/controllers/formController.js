const formService = require('../services/formService');

//funcion controller para handlear las peticiones post para prueba afectiva
const postPruebaAfectiva = async (req, res) => {
  try {
    const pruebaAfectiva = await formService.createPruebaAfectiva(req.body);
    res.status(201).json(pruebaAfectiva);
  } catch (error) {
    console.error('Error in postPruebaAfectiva:', error);
    res.status(500).json({ message: error.message });
  }
};

//funcion controller para handlear las peticiones post para prueba descriptiva
const postPruebaDescriptiva = async (req, res) => {
  try {
    const pruebaDescriptiva = await formService.createPruebaDescriptiva(req.body);
    res.status(201).json(pruebaDescriptiva);
  } catch (error) {
    console.error('Error in postPruebaDescriptiva:', error);
    res.status(500).json({ message: error.message });
  }
};

//funcion controller para handlear las peticiones post para prueba general
const postGeneral = async (req, res) => {
  try {
    const general = await formService.createGeneral(req.body);
    res.status(201).json(general);
  } catch (error) {
    console.error('Error in postGeneral:', error);
    res.status(500).json({ message: error.message });
  }
};

//funcion controller para handlear las peticiones get para prueba afectiva
const getPruebasAfectivas = async (req, res) => {
  try {
    const pruebasAfectivas = await formService.getAllPruebasAfectivas();
    res.status(200).json(pruebasAfectivas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//funcion controller para handlear las peticiones get para prueba descriptiva
const getPruebasDescriptivas = async (req, res) => {
  try {
    const pruebasDescriptivas = await formService.getAllPruebasDescriptivas();
    res.status(200).json(pruebasDescriptivas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//funcion controller para handlear las peticiones get para prueba general
const getGenerales = async (req, res) => {
  try {
    const generales = await formService.getAllGenerales();
    res.status(200).json(generales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//ecsportamos
module.exports = {
  postPruebaAfectiva,
  postPruebaDescriptiva,
  postGeneral,
  getPruebasAfectivas,
  getPruebasDescriptivas,
  getGenerales
};
