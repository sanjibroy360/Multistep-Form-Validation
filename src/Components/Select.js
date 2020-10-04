import React from "react";
import { Form } from "semantic-ui-react";

function Select({value, errorMessage, options, name, label, handleInput}) {
  
  return (
    <Form.Field
      label={label}
      name={name || ""}
      value={value || ""}
      control={"select"}
      onChange={handleInput}
      error={
        errorMessage
          ? { content: errorMessage }
          : false
      }
    >
      <option key="C001" value="">
        Select Country
      </option>
      {options.map((option) => {
        return (
          <option key={option.key} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </Form.Field>
  );
}

export default Select;
