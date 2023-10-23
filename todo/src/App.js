import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [task, setTask] = useState('');
  const [loadedtask, setloadedTask] = useState([]);

  const addTask = () => {
    axios.post('http://localhost:4000/api/v1/add', { task: task })
      .then(response => {
        toast.success('Successfully created a new task');
      })
      .catch(error => {
        toast.error('Error creating a new task');
      });
  }

  const loadTask = () => {
    axios.get('http://localhost:4000/api/v1/')
      .then(response => {
        setloadedTask(response.data)
      })
      .catch(error => {
        toast.error('Error loading tasks');
      });
  }

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:4000/api/v1/${id}`)
      .then(response => {
        toast.success('Successfully deleted a task');
      })
      .catch(error => {
        toast.error('Error deleting a task');
      });
  }

  const updateToTrue = async (id) => {
    await axios.patch(`http://localhost:4000/api/v1/${id}`)
      .then(response => {
        toast.success('Successfully updated a task');
      })
      .catch(error => {
        toast.error('Error updating a task');
      });
  }

  useEffect(() => {
    loadTask();
  }, [loadedtask])

  return (
    <>
      <div className="container">
        <ToastContainer />
        <div className="input-container">
          <input
            onChange={(e) => setTask(e.target.value)}
            value={task}
            type="text"
            placeholder="Enter the task"
          />
          <button onClick={addTask}>Add</button>
        </div>
        <h1>My Tasks</h1>
        <div>Not Done</div>
        <div className="task-list">
          {loadedtask.map((task, index) => (
            (task.status === false) ?
              <div className="task-item" key={index}>
                <div className="task-text">{task.task}</div>
              <div>
              <button
                  className="done-button"
                  onClick={() => updateToTrue(task._id)}
                >
                Done
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>
              </div>
              </div> : <></>
          ))}
        </div>
        <div>Done</div>
        <div className="task-list">
          {loadedtask.map((task, index) => (
            (task.status === true) ?
              <div className="task-item" key={index}>
                <div className="task-text">{task.task}</div>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>
              </div> : <></>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
