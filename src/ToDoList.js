import { useState } from "react";
import Todo from "./Todo"
import NewToDoForm from "./NewToDoForm"
import { v4 as uuid } from "uuid";


export default function ToDoList () {


  const [toDos, updateTodo] = useState([])
  function addToList({task}){
    const newToDos = [...toDos]
    newToDos.push({task, id: uuid()})
    updateTodo(newToDos)
  }
  function completeTodo(task){
    const newToDos = toDos.filter(t => t.task !== task)
    updateTodo(newToDos)
  }
  return (
    <div className="ToDoList">
    <NewToDoForm addToList={addToList}/>
    { toDos.map(t => <Todo key={t.id} task={t.task} completeTodo={completeTodo}/>) }
    </div>
  )
}