import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import TreeView from './TreeView';
import TextEditor from './TextEditor';
import GraphView from './GraphView';
import ContentEditor from './ContentEditor';
import UserOptions from './UserOptions';
import "./styles.css";

const App = () => {
  const [currentView, setCurrentView] = useState('tree'); // 'tree' or 'graph'
  const [selectedNode, setSelectedNode] = useState(null);
  const [content, setContent] = useState('');

  const handleSelectNode = (node) => {
    setSelectedNode(node);
    setContent(node.content);
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
    // You should also update the node's content in the treeData and localStorage here
  };

  return (
    <div>
      <HamburgerMenu setCurrentView={setCurrentView} />
      {currentView === 'tree' && <TreeView onSelectNode={handleSelectNode} />}
      {currentView === 'graph' && <GraphView />}
      {selectedNode && (
        <ContentEditor content={content} onContentChange={handleContentChange} />
        )}
        <TextEditor></TextEditor>
      <UserOptions />
    </div>
  );
};

export default App;
