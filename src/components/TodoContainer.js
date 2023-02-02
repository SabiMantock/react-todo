import React, { useState } from "react"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodoList from "./TodoList"
const TodoContainer = ()=> {
const [todos, setTodos]=useState([
   {
     id: 1,
     title: "Setup development environment",
     completed: true
   },
   {
     id: 2,
     title: "Develop website and add content",
     completed: false
   },
   {
     id: 3,
     title: "Deploy to live server",
     completed: false
   }
])
  
 const handleChange = (id) => {
   setTodos(prev => {
     return prev.map(todo => {
       if (todo.id === id) {
         return {
           ...todo,
           completed:!todo.completed,
         }
       }
       return todo
     })
   })
 };
  
  const delTodo = id => {
    setTodos(prev => {
      return [...prev.filter(todo => {
        return todo.id !== id;
      })]
    })
  };
  
  const addTodoItem = title => {
   const newTodo = {
    id: 4,
    title: title,
    completed: false
  };
  setTodos([...todos, newTodo])
};
  
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={addTodoItem}/>
       <TodoList todos={todos} handleChangeProps={handleChange}   deleteTodoProps={delTodo}/>
      </div>
    )

}
export default TodoContainer