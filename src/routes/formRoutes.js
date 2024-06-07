const express = require('express');
const formController = require('../controllers/formController');

const router = express.Router(); //creamos instancia de router

//rutitas post para crear documentos
router.post('/prueba-afectiva', formController.postPruebaAfectiva);
router.post('/prueba-descriptiva', formController.postPruebaDescriptiva);
router.post('/general', formController.postGeneral);

//rutitas get para obtener documentos
router.get('/prueba-afectiva', formController.getPruebasAfectivas);
router.get('/prueba-descriptiva', formController.getPruebasDescriptivas);
router.get('/general', formController.getGenerales);

//exportamosssssssssssss
module.exports = router;
