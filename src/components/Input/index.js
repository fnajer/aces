import React from 'react';
import { connect } from 'react-redux';

import { 
  saveInputValue,
} from 'redux/actionCreators/input';

function Input({
  saveInputValue, 
  clearInputValue, 
  value,
  action,
  ...restProps
}) {
  function handleChange(event) {
    saveInputValue(event.target.value);
  }
  function handleKeyPress(event) {
    if(event.key === 'Enter'){
      action(value);
    }
  }

  return (
    <input {...restProps} 
      value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress} 
    />
  );
}

export default connect(state => ({
  value: state.input.value,
}), {
  saveInputValue,
})(Input);