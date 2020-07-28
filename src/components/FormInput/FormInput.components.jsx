import React from 'react';

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <div>
    <label>{label}: </label>
    <input
      onChange={handleChange}
      {...otherProps}
    />
  </div>
);

export default FormInput;