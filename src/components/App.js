import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css';
import DynamicForm from './DynamicForm';

const App = () => {
  return (
    <div className="app-container">
      <h1><strong>LKMX - Front-end</strong></h1>
      <div className="toDo-container d-flex flex-column">
        <h4 className="toDo-title"><strong>To Do List</strong></h4>
        <DynamicForm />
      </div>
    </div>
  )
}

export default App;