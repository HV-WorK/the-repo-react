import React, { useState } from 'react';

const TextEditor = ({ onTextChange }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
    if (onTextChange) {
      onTextChange(event.target.value);
    }
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      placeholder="Write your text here..."
      style={{ width: '100%', height: '300px', marginTop: '20px' }}
    ></textarea>
  );
};

export default TextEditor;
