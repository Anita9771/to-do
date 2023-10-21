// src/App.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Task({ index, task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) onEdit(index, editedTask);
  };

  return (
    <li className="task">
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        task
      )}
      <div className="task-actions">
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    </li>
  );
}

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/')
    alert("Logged Out")
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  return (
    <div className="to-do">
      <h1>To-Do App</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))}
      </ul>
      <button onClick={handleLogout} >LOGOUT</button>
    </div>
  );
}

export default ToDo;


// function ToDo() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   const addTask = () => {
//     // Implement API call to create a task
//   };

//   const deleteTask = (taskId) => {
//     // Implement API call to delete a task
//   };

//   const editTask = (taskId, updatedTask) => {
//     // Implement API call to update a task
//   };

//   const handleLogout = () => {
//     // Implement API call to log out the user
//   };

//   return (
//     <div>
//       <h1>ToDo App</h1>
//       <input
//         type="text"
//         placeholder="Add a task..."
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button onClick={addTask}>Add Task</button>
//       <button onClick={handleLogout}>Logout</button>
//       <ul>
//         {tasks.map((task) => (
//           <div key={task.id}>
//             <li>{task.title}</li>
//             <button onClick={() => editTask(task.id, 'Updated task')}>Edit</button>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }


