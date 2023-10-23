const Todo = require('../models/todoSchema');

const addTodo = async (req, res) => {
      const { task } = req.body;
      const newTask = new Todo({
        task: task 
      });
      await newTask.save();
      setTimeout(() => {
        res.status(201).json(newTask); 
      }, 1000);
  };

const showTodo = async (req,res)=>{
    const tasks = await Todo.find({});
    res.status(200).json(tasks);
}

const deleteTodo = async (req,res)=>{
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
   setTimeout(() => {
    res.status(200).json({ message: 'Successfully deleted' });
   }, 1000);
}

const updateToTrue = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndUpdate(id,{status : true}) 
  setTimeout(() => {
    res.status(200).json({ message: 'Successfully updated' });
  }, 1000);
}
  
  module.exports = { addTodo,showTodo,deleteTodo,updateToTrue };
  