let nextNodeId = 6;  

export const addNode = (parentId, name) => ({
  type: 'ADD_NODE',
  payload: { parentId, name, id: nextNodeId++ }
});

export const removeNode = (id) => ({
  type: 'REMOVE_NODE',
  payload: id
});

export const editNode = (id, name) => ({
  type: 'EDIT_NODE',
  payload: { id, name }
});

export const resetTree = () => ({
  type: 'RESET_TREE'
});
