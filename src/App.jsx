import { useState } from 'react'
import './App.css'
import ItemList from './compnents/itemList.jsx'
function App() {

  const [NewTask, setNewTask] = useState('')
  const [TaskList, setTaskList] = useState([]);
  const [CompletedTasks, setCompletedTasks] = useState([]);
  

  function handleInput(e) {
    let newValue = e.target.value;
    setNewTask(newValue);
  }
  function addTask() {
    if (NewTask.trim() === '') return;
    setTaskList(prev => [...prev, NewTask]);
    setNewTask('');
  }
  function DeleteTask(taskName) {
    setTaskList(prev => prev.filter(task => task !== taskName));
  }

  function DeleteCompletedTask(taskName) {
    setCompletedTasks(prev => prev.filter(task => task !== taskName));
  }

function CompleteTask(taskName) {
  setTaskList(prev => prev.filter(task => task !== taskName));
  setCompletedTasks(prev => [...prev, taskName]);
}
function updateTask(oldTask, newTask) {
  setTaskList(prev =>
    prev.map(task => (task === oldTask ? newTask : task))
  );
}
function handleSave() {
  if (editedText.trim() === "") return;
  if (updateTask) {
    updateTask(taskName, editedText);
  }
  setIsEditing(false);
}


  return (
    <div className="to-do-main">
      <div className="to-do-header">
        <h1 id="header">To-Do List</h1>

        <div className="to-do-input">
          <input type="text" placeholder="Add a task" onChange={(e) => { handleInput(e) }}
            value={NewTask} />
          <button onClick={() => { addTask() }}>+</button>
        </div>
      </div>

      <hr />

      <div className="to-do-list">
        <div className="to-do-heading">
          <h2 id="tasks">My Tasks</h2>
        </div>


       {
  TaskList.map((task, index) => (
  <ItemList
  taskName={task}
  key={task + index}
  deleteTask={DeleteTask}
  completeTask={CompleteTask}
  updateTask={updateTask}
/>
  ))
}


        <hr />

        <h2 id="tasks">Completed Tasks</h2>
       {
  CompletedTasks.map((task, index) => (
<ItemList
  taskName={task}
  key={task + index}
  deleteTask={DeleteCompletedTask}
  isCompleted={true}
/>
  ))
}




      </div>
    </div>

  )
}

export default App;
