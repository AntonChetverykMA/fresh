import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer';

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
