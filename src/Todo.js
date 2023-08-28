export default function Todo ({task, completeTodo}) {
  return(
    <div className="ToDo">
     <p>{task}</p>
     <button onClick={()=>completeTodo(task)}>X</button> 
    </div>
  )
}