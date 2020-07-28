import React from 'react';

const FormButton = ({ children, ...otherProps }) => (
  <button {...otherProps}>
    {children}
  </button>
);

export default FormButton;