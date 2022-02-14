import { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField/TextField";
import Button from "@mui/material/Button/Button";

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState("");
    const textField = useRef();

    const handlerChange = (e) => {
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
            <TextField
                value={value}
                inputRef={textField}
                onChange={handlerChange}
                type="text"
            />
            <Button type="submit">Send</Button>
        </form>
    );
};