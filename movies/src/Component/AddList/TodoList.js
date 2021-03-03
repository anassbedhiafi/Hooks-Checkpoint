import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import "../AddList/TodoList.css"

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [add, setAdd] = useState(false)
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="buttonadd">
    <button className="addbutton" onClick={()=>setAdd(!add)}><i class="fas fa-plus-circle"></i></button>
    </div>
            {add? <section className="">
    <div className='todo-app'>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      </div>
      </section> : null}
      
    </div>
  );
}

export default TodoList;
