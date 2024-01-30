import React from 'react';
import NodeControls from './NodeControls';

const TreeView = ({ onSelectNode }) => {
  // Dummy data for tree view, you would replace this with your tree state management
  const nodes = [
    // Example nodes
  ];

  return (
    <div>
      {nodes.map(node => (
        <div key={node.id} onClick={() => onSelectNode(node)}>
          {node.title}
          <NodeControls nodeId={node.id} />
        </div>
      ))}
    </div>
  );
};

export default TreeView;
