import React from 'react';
import { connect } from 'react-redux';

function Button({ children, action, value, ...restProps }) {
  function handleClick(event) {
    action(value);
  }

  return (
    <button {...restProps}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default connect(state => ({
  value: state.input.value,
}))(Button);