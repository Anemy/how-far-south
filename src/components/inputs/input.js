import React, { Component } from 'react';

import './input.scss'

class Input extends Component {
  render() {
    const { id, type, value, onChange, onBlur, label, flex, name, autocomplete } = this.props;
    return (
      <div className={`input floating-label-input ${flex ? 'flex' : ''}`}>
        <label htmlFor={id} className={value || value === 0 ? 'value' : ''}>{label}</label>
        <input
          type={type || 'text'}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          autoComplete={autocomplete}
        />
      </div>
    );
  }
}

export default Input;