const express = require('express');
const router = express.Router();
const { addTodo,showTodo,deleteTodo,updateToTrue } = require('../controllers/todoControllers');

router.route('/add').post(addTodo);
router.route('/').get(showTodo);
router.route('/:id').delete(deleteTodo);
router.route('/:id').patch(updateToTrue);

module.exports = router;