import React from "react";
import { Form, Input } from "semantic-ui-react";

function InputBox({
  name,
  value,
  errorMessage,
  handleInput,
  label,
  placeholder,
  type
}) { 
  return (
    <Form.Field
      type={type || "text"}
      control={Input}
      label={label}
      placeholder={placeholder || label}
      name={name}
      value={value || ""}
      onChange={handleInput}
      error={
        errorMessage
          ? {
              content: errorMessage,
            }
          : false
      }
    />
  );
}

export default InputBox;
