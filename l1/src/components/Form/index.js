import { useEffect, useRef, useState } from "react";

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const textField = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  useEffect(() => {
    textField.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        ref={textField}
        onChange={handleChange}
        type="text"
      />
      <input type="submit" />
    </form>
  );
};