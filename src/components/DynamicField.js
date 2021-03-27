import React, { useState } from 'react'
import '../style/DynamicField.css';
import editIcon from '../resources/icon-pen.svg';
import deleteIcon from '../resources/icon-trash.svg';
import saveIcon from '../resources/icon-disk.svg';

const DynamicField = (props) => {
  const [newValue, setNewValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (event) => {
    setNewValue(event.target.value);
  }

  const changeEditState = () =>{
    setNewValue(props.textContent);
    setIsEditing(!isEditing);
  }

  const deleteThis = () => {
    props.clickDelete(props.position);
  }

  const editThis = () => {
    props.clickEdit(props.position, newValue);
    changeEditState();
  }

  if (!isEditing) {
    return (
      <div className="field-container bg-light d-flex flex-row flex-wrap">
        <div className="text-muted field-message"><strong>• </strong>{props.textContent}</div>
        <img className="btn btn-outline-primary text-field-icon" src={editIcon} onClick={changeEditState} alt="Editar" />
        <img
          className="btn btn-outline-secondary text-field-icon"
          onClick={deleteThis}
          src={deleteIcon}
          alt="Eliminar"
        />
      </div>
    )
  } else {
    return (
      <div className="edit-field-container bg-light">
        <form className="dynamic-form d-flex">
            <input
              required
              type="text"
              className="form-control dynamic-field-text-field"
              value={newValue}
              onChange={handleTextChange}
            />
          <img
            className="btn btn-outline-secondary text-field-icon edit-icon"
            onClick={editThis}
            src={saveIcon}
            alt="Guardar"
          />
        </form>
      </div>
    )
  }
}

export default DynamicField;