import express from 'express';
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from './todoControllers.js';

const router = express.Router();

router.route('/').get(getTodos);
router.route('/').post(addTodo);
router.route('/:id').delete(deleteTodo);
router.route('/:id').put(updateTodo);

export default router;
