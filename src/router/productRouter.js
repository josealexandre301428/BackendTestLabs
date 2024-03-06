const { Router } = require('express');
const productsController = require('../controller/productsController');

const productsRouter = Router();

// CREAT para unico produto ou multiplos produtos
productsRouter.post('/create', productsController.create);
// READ
productsRouter.get('/products', productsController.read);
// UPDATE
productsRouter.put('/update/:id', productsController.update);
// DELETE
productsRouter.delete('/delete/:id', productsController.delete);

module.exports = productsRouter;