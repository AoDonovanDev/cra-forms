import { useState } from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import { v4 as uuid } from "uuid";

export default function BoxList () {
  const [boxes, addBox] = useState([])

  function addItem({height, width, bgcolor}){
    const newBoxes = [...boxes]
    newBoxes.push({height, width, bgcolor, id: uuid()})
    console.log(newBoxes, height, width, bgcolor)
    addBox(newBoxes)
  }

  function rmvItem(e){
    e.target.parentElement.remove()
  }
 
  return(
    <>
    {boxes.map(b => <Box key={b.id} height={b.height} width={b.width} bgcolor={b.bgcolor} rmvItem={rmvItem}/>)}
    <NewBoxForm addItem={addItem}/>
    </>
  )
}