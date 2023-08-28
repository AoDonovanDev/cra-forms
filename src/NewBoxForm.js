import { useState } from "react";

export default function NewBoxForm ({addItem}) {
  const INITIAL_STATE = {
    bgcolor: "",
    height: 100,
    width: 100
  }
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = evt => {
    const { name, value} = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(formData)
    addItem(formData);
    setFormData(INITIAL_STATE);
  };

  return (
  
    <form onSubmit={handleSubmit}>
      <label htmlFor="bgcolor">background color</label>
      <input type="text" 
             name="bgcolor"
             id="bgcolor"
             value={formData.bgcolor}
             onChange={handleChange}
             />
      <label htmlFor="height">height</label>
      <input type="number" 
             name="height"
             id="height"
             value={formData.height}
             onChange={handleChange} 
             />
      <label htmlFor="width">width</label>
      <input type="number" 
             name="width"
             id="width"
             value={formData.width}
             onChange={handleChange} 
             />
      <button >add a box!</button>
    </form>
  )
}