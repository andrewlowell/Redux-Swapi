import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: true,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        characters: state.characters,
        fetching: true,
        error: state.error
      }
    case SUCCESS:
      return {
        characters: action.payload,
        fetching: false,
        error: state.error
      }
    case FAILURE:
      return {
        characters: state.characters,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
