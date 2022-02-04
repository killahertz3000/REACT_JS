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
                ref={textField}
                onChange={handlerChange}
                type="text"
            />
            <Button>Send</Button>
        </form>

        // <form onSubmit={handleSubmit}>
        //     <input value={value} ref={textField} onChange={handlerChange} type="text"/>
            // <input type="submit"/>
        // </form>
    );
};