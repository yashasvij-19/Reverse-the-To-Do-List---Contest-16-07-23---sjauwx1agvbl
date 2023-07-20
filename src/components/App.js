import React, { useState } from 'react'
import '../styles/App.css';

function ToDo({ todoId, createdAt }) {
  return (<tr>
    <td>
      <p>{todoId}</p>
    </td>
    <td>
      <input type="text" />
    </td>
    <td>
      <p>{createdAt}</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);
  
function reverse(){
      setTodos((todos) => [...todos].reverse());;
}
  
  return (
    <div id="main">
      <button onClick={reverse}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo) => (
            <ToDo key={todo.id} todoId={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default App;
