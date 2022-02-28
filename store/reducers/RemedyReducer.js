import { SET_MED } from "../actions/RemedyAction"

const initialState = {
  med: [],
}

const RemedyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MED:
      return {
        med: action.med,
      }
    default:
      return state;
  }
};

export default RemedyReducer;