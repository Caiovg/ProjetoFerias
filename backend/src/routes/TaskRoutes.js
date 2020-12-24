const express = require('express');
const router = express.Router();
//endentifica as rotas que estão chegando
const TaskController = require('../controller/TaskController');
/**Validação */
const TaskValidation = require("../middlewares/TaskValidation");

/**Validação para o all(buscar todos) */
const MacaddressValidation = require("../middlewares/MacaddressValidation");

router.post('/', TaskValidation, TaskController.create);
//chamndo a função de criar ou a rota de criar tarefas

router.put('/:id', TaskValidation, TaskController.update);

router.get('/filter/all', MacaddressValidation, TaskController.all);
router.get('/:id', TaskController.show);

router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);

module.exports = router;