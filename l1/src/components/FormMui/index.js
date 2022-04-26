import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./styles.css";
import { ThemeContext } from "../../utils/ThemeContext";

export const FormMui = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={value} onChange={handleChange} />
      <Button variant="contained">
        <span>Send</span>
      </Button>
    </form>
  );
};

const withContext = (Component) => {
  return (props) => {
    const { messageColor } = useContext(ThemeContext);
    return <Component messageColor={messageColor} {...props} />;
  };
};

export const FormWithLogger = withContext(FormMui);