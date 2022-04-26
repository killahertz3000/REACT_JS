import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { ThemeContext } from "../../utils/ThemeContext";

export const Message = ({ text, author }) => {
  return (
    <div>
      <span>
        {author}: {text}
      </span>
    </div>
  );
};