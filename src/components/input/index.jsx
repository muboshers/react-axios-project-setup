import React from "react";

import {
  IconStyles,
  InputBox,
  InputElement,
  LabelStyles,
} from "./input.styles";

export const Input = ({
  as = "input",
  type,
  icon,
  iconPosition = "no-icon",
  label,
  name,
  id,
  className,
  field,
  handleShowPassword,
  ...props
}) => {
  return (
    <InputBox className={className} type={type}>
      {label && (
        <LabelStyles type={type} htmlFor={id}>
          {label}
        </LabelStyles>
      )}
      <InputElement
        type={type}
        as={as}
        name={name}
        id={id}
        {...field}
        {...props}
        icon={icon}
        iconPosition={iconPosition}
      />
      <IconStyles
        label={label}
        onClick={handleShowPassword}
        iconPosition={iconPosition}
      >
        {icon}
      </IconStyles>
    </InputBox>
  );
};
