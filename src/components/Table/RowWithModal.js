import React from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';

import { editTownWheather } from 'redux/actionCreators/wheather';

function RowWithModal({ 
  town, 
  children,
  editTownWheather,
}) {
  const [inputValues, setInputValues] = React.useState({
    name: town.name, temperature: town.temperature
  });

  const handleOnChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }
  function handleSave(closeModal, event) {
    editTownWheather(town, inputValues); 
    closeModal(event);
  }
  function isDisabled() {
    return !inputValues.name || !inputValues.temperature;
  }

  return (
    <>
      <Modal
        contentLabel="Редактирование"
        controls={openModal => (
          <tr onClick={event => openModal(event)}>
            {children}
          </tr>
        )}
      >
        {closeModal => (
          <>
            <label>
              Город: 
              <input 
                value={inputValues.name} 
                name="name" 
                onChange={handleOnChange} 
              />
            </label>
            <label>
              Температура: 
              <input 
                value={inputValues.temperature} 
                name="temperature" 
                onChange={handleOnChange} 
              />
            </label>
            <button 
              disabled={isDisabled()} 
              onClick={event => { handleSave(closeModal, event) }}
            >
              Сохранить
            </button>
            <button onClick={closeModal}>Отмена</button>
          </>
        )}
      </Modal>
    </>
  );
}

export default connect(null, 
  { editTownWheather }
)(RowWithModal);
