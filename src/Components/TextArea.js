import React from "react";
import { Form } from "semantic-ui-react";
import TextareaAutosize from "react-textarea-autosize";

function TextArea({
  name,
  value,
  errorMessage,
  handleInput,
  label,
  placeholder,
}) {
  return (
    <Form.Field
      control={TextareaAutosize}
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

export default TextArea;
