import React from "react";

export class Message extends React.Component {
  render() {
    const { text, author } = this.props;
    return <span>{author}: {text}</span>;
  }
}