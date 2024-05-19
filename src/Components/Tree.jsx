import React from 'react';
import './MainPage.css';

const Tree = ({ node, onAdd, onRemove, onEdit, depth }) => {
  return (
    <div style = {{  position: "relative" ,marginLeft: `${depth * 10}%`}}>
      <div style = {{display: 'flex'}}>
        <span>{node.name}</span>
        <div className="button-container" style = {{marginLeft: `${10 + depth * 10}%`}}>
            <button onClick={() => onAdd(node.id)}>Add</button>
            {depth !== 0 && <button onClick={() => onRemove(node.id)}>Remove</button>}
            <button onClick={() => onEdit(node.id)}>Edit</button>
        </div>
      </div>
      {node.children && node.children.map(child => (
        <Tree
          key={child.id}
          node={child}
          onAdd={onAdd}
          onRemove={onRemove}
          onEdit={onEdit}
          depth={depth + 1} 
        />
      ))}
    </div>
  );
};

export default Tree;
