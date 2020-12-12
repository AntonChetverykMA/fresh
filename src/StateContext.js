import React, { useReducer } from 'react';

const initialState = {
  client: null,
  applicationInfo: null,
  applicants: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLIENT':
      return {
        ...state,
        client: action.payload,
      };
    case 'SET_APPLICANTS':
      return {
        ...state,
        applicants: action.payload,
      };
    default:
      return state;
  }
};

export const DispatchContext = React.createContext(() => {});
export const StateContext = React.createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default StateProvider;
