import React from 'react';
import { ButtonMain } from './button.style';

export const Button = ({ children, ...props }) => (
  <ButtonMain {...props}>{children}</ButtonMain>
);
