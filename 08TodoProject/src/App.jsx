import React, { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  
  const [todos ,setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev,{id: Date.now() , ...todo}])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((item) => item.id === todo.id? todo : item))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id? {...todo, completed:!todo.completed} : todo))
  }

  useEffect(() => {
    const todos =JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.lenght > 0) {
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  
  return (
   <TodoProvider value = {{todos, addTodo,updateTodo,deleteTodo,toggleTodo}}>
   <div className="bg-[#3a5886] text-blue-600 w-full h-screen py-4">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
}

export default App