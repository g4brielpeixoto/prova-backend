import { Router } from 'express';
import { CategoriaController } from './controllers/CategoriaController';
import { ProdutoController } from './controllers/ProdutoController';

const router = Router();
const categoriaController = new CategoriaController();
const produtoController = new ProdutoController();

//Categorias
router.get('/categoria', categoriaController.findAll);
router.get('/categoria/:id', categoriaController.findById);
router.post('/categoria', categoriaController.create);
router.put('/categoria/:id', categoriaController.update);
router.delete('/categoria/:id', categoriaController.delete);

//Produtos
router.get('/produto', produtoController.findAll);
router.get('/produto/:id', produtoController.findById);
router.post('/produto', produtoController.create);
router.put('/produto/:id', produtoController.update);
router.delete('/produto/:id', produtoController.delete);

export { router };
