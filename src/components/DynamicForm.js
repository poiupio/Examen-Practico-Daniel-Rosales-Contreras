import React, { useState } from 'react'
import '../style/DynamicForm.css';
import DynamicField from './DynamicField';

const DynamicForm = () => {
  const [dynamicElements, setDynamicElements] = useState([]);
  const [inputTextValue, setImputText] = useState('');

  const saveText = (event) =>{
    if(inputTextValue !== ''){
      let listElements = [... dynamicElements];
      listElements.push(inputTextValue);
      setDynamicElements(listElements);
      setImputText('');
      event.preventDefault();
    }
  }

  const handleTextChange = (event) => {
    setImputText(event.target.value);
  }

  function deleteElemment(index){
    let listElements = [... dynamicElements];
    let leftPart = listElements.slice(0, index);
    let rightPart = listElements.slice(index+1, listElements.length);

    listElements = leftPart.concat(rightPart);
    setDynamicElements(listElements);
  }

  function editElemment(index, text){
    let listElements = [... dynamicElements];

    listElements[index]=text;
    setDynamicElements(listElements);
  }

  return (
    <div>
      <form className="dynamic-form d-flex">
        <div className="form-group d-flex flex-row input-text-form">
          <input 
            required
            type="text" 
            className="form-control" 
            placeholder="Escriba una tarea" 
            value={inputTextValue} 
            onChange={handleTextChange}
          />
        </div>
        <button className="btn btn-primary button-form" onClick={saveText}>Agregar</button>
      </form>
      <div className="dynamicElements">
        {
          dynamicElements.length > 0 ?
          dynamicElements.map((text, position) => {
              return <DynamicField  
                        textContent={text} 
                        key={position} 
                        position={position} 
                        clickDelete={deleteElemment} 
                        clickEdit={editElemment}
                      />;
            })
          :
            <div className="text-muted bg-light default-message">No has agregado tareas</div>
        }
      </div>
    </div>
  )
}

export default DynamicForm;
