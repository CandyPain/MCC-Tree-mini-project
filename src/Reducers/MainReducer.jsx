const initialState = {
  tree: [
    { id: 1, name: 'Node 1', children: [] },
  ]
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NODE': {
      const { parentId, name, id } = action.payload;

      const addNode = (nodes, parentId) => {
        return nodes.map(node => {
          if (node.id === parentId) {
            return {
              ...node,
              children: [...node.children, { id, name, children: [] }]
            };
          }
          return {
            ...node,
            children: addNode(node.children, parentId)
          };
        });
      };

      return {
        ...state,
        tree: addNode(state.tree, parentId)
      };
    }

    case 'REMOVE_NODE': {
      const removeNode = (nodes, id) => {
        return nodes
          .filter(node => node.id !== id)
          .map(node => ({
            ...node,
            children: removeNode(node.children, id)
          }));
      };

      return {
        ...state,
        tree: removeNode(state.tree, action.payload)
      };
    }

    case 'EDIT_NODE': {
      const editNode = (nodes, id, name) => {
        return nodes.map(node => {
          if (node.id === id) {
            return { ...node, name };
          }
          return {
            ...node,
            children: editNode(node.children, id, name)
          };
        });
      };

      return {
        ...state,
        tree: editNode(state.tree, action.payload.id, action.payload.name)
      };
    }

    case 'RESET_TREE':
      return initialState;

    default:
      return state;
  }
};

export default mainReducer;
