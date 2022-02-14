import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Message = ({ text, author }) => {
  return (
    <div>
      <span>
        {author}: {text}
      </span>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number]),
  author: PropTypes.string.isRequired,
};