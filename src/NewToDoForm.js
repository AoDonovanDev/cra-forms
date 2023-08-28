import { useState } from "react";

export default function NewBoxForm ({addToList}) {
  const INITIAL_STATE = {
    task: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = evt => {
    const { name, value} = evt.target;
    setFormData(fData => ({
      [name]: value
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addToList(formData);
    setFormData(INITIAL_STATE);
  };

  return (
  
    <form onSubmit={handleSubmit} id="todoForm">
      <label htmlFor="task">todo</label>
      <input type="text" 
             name="task"
             id="task"
             value={formData.bgcolor}
             onChange={handleChange}
             />
      <button >add a todo!</button>
    </form>
  )
}