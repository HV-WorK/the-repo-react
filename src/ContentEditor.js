import React from 'react';

const ContentEditor = ({ content, onContentChange }) => {
  return (
    <textarea
      value={content}
      onChange={(e) => onContentChange(e.target.value)}
    />
  );
};

export default ContentEditor;
