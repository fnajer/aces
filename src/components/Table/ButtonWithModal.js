import React from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';

import { setActiveTownWheather } from 'redux/actionCreators/wheather';

function ButtonWithModal({ 
  town, 
  children, 
  setActiveTownWheather,
}) {
  function handleClickRow(openModal, event) {
    event.stopPropagation();

    if (town.active)
      return openModal(event);

    setActiveTownWheather(town, true);
  }
  function handleSave(closeModal, event) {
    setActiveTownWheather(town, false); 
    closeModal(event);
  }

  return (
    <>
      <Modal
        contentLabel="Удаление"
        controls={openModal => (
          <button onClick={event => handleClickRow(openModal, event)}>
            {children}
          </button>
        )}
      >
        {closeModal => (
          <>
            <h2>Удалить город {town.name} из списка?</h2>
            <button
              onClick={event => handleSave(closeModal, event)}
            >
              Да
            </button>
            <button onClick={closeModal}>Нет</button>
          </>
        )}
      </Modal>
    </>
  );
}

export default connect(null, 
  { setActiveTownWheather }
)(ButtonWithModal);
