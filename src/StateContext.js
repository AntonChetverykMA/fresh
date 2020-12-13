import React, { useReducer } from 'react';

const initialState = {
  client: null,
  applicants: [],
  newApplicants: [],
  selectedApplicants: [],
  result: null,
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
    case 'RESET_NEW_APPLICANTS':
      return {
        ...state,
        newApplicants: [],
      };
    case 'ADD_NEW_APPLICANT':
      return {
        ...state,
        newApplicants: [...state.newApplicants, action.payload],
      };

    case 'DELETE_APPLICANT':
      return {
        ...state,
        newApplicants: action.payload,
      };

    case 'ADD_NEW_SELECTED_APPLICANT':
      return {
        ...state,
        selectedApplicants: [...state.selectedApplicants, action.payload],
      };

    case 'DELETE_SELECETED_APPLICANT':
      return {
        ...state,
        selectedApplicants: action.payload,
      };

    case 'SET_RESULT':
      return {
        ...state,
        result: action.payload,
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
