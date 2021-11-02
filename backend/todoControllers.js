import TODO from './todoModel.js';

const getTodos = async (req, res) => {
  try {
    const todos = await TODO.find({});

    if (todos) {
      res.json(todos);
    } else {
      res.json('No todos');
    }
  } catch (error) {
    res.json('Error with get: ' + error);
  }
};

const addTodo = async (req, res) => {
  let newTodo = req.body;

  try {
    let todo = new TODO({
      ...newTodo,
    });

    let addedTodo = await todo.save();
    res.json(addedTodo);
  } catch (error) {
    res.status(401).json('Error in Add: ' + error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await TODO.findById(req.params.id);
    if (todo) {
      todo.remove();
      res.json('Todo removed');
    } else {
      res.json("Can't find the todo");
    }
  } catch (error) {
    res.json('Error: ' + error);
  }
};

const updateTodo = async (req, res) => {
  const { todo, complete } = req.body;
  const oldTodo = await TODO.findById(req.params.id);
  if (oldTodo) {
    oldTodo.todo = todo;
    oldTodo.complete = complete;

    const updateTodo = await oldTodo.save();
    res.json(updateTodo);
  } else {
    res.status.json('Error no todo');
  }
};

export { getTodos, addTodo, deleteTodo, updateTodo };
