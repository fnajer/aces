import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function ModalComponent({ 
  contentLabel, 
  children,
  controls,
}) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal(event) {
    event.stopPropagation();
    setIsOpen(true);
  }
  function closeModal(event) {
    event.stopPropagation();
    setIsOpen(false);
  }

  return (
    <>
      {controls(openModal)}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={contentLabel}
      >
        {children(closeModal)}
      </Modal>
    </>
  );
}

export default ModalComponent;
