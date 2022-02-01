import { useState } from "react";

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState("");

    const handlerChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={handlerChange} type="text"/>
            <input type="submit"/>
        </form>
    );
};