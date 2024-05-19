import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tree from './Tree';
import { addNode, removeNode, editNode, resetTree } from './Actions/TreeActions';
import './MainPage.css';

const MainPage = () => {
  const treeData = useSelector(state => state.main.tree);
  const dispatch = useDispatch();

  const handleAdd = (parentId) => {
    const nodeName = prompt('Enter node name:');
    if (nodeName) {
      dispatch(addNode(parentId, nodeName));
    }
  };

  const handleRemove = (nodeId) => {
    dispatch(removeNode(nodeId));
  };

  const handleEdit = (nodeId) => {
    const newNodeName = prompt('Enter new node name:');
    if (newNodeName) {
      dispatch(editNode(nodeId, newNodeName));
    }
  };

  const handleReset = () => {
    dispatch(resetTree());
  };

  return (
    <div class = "container">
      <h1>Tree(Artem Gorst project)</h1>
      <div className="tree-container">
        {treeData.map(node => (
          <Tree
            key={node.id}
            node={node}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onEdit={handleEdit}
            depth={0}
          />
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default MainPage;
