import * as types from './types';

export const initialState = {
  client: null,
  applicants: [],
  newApplicants: [],
  selectedApplicants: [],
  result: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CLIENT:
      return {
        ...state,
        client: action.payload,
      };
    case types.SET_APPLICANTS:
      return {
        ...state,
        applicants: action.payload,
      };
    case types.RESET_NEW_APPLICANTS:
      return {
        ...state,
        newApplicants: [],
      };
    case types.ADD_NEW_APPLICANT:
      return {
        ...state,
        newApplicants: [...state.newApplicants, action.payload],
      };

    case types.DELETE_APPLICANT:
      return {
        ...state,
        newApplicants: action.payload,
      };

    case types.ADD_NEW_SELECTED_APPLICANT:
      return {
        ...state,
        selectedApplicants: [...state.selectedApplicants, action.payload],
      };

    case types.DELETE_SELECETED_APPLICANT:
      return {
        ...state,
        selectedApplicants: action.payload,
      };

    case types.SET_RESULT:
      return {
        ...state,
        result: action.payload,
      };

    default:
      return state;
  }
};
