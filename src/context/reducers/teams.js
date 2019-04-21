import teamActions from '../actions/teams';

export const initialState = {
  data: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  if (teamActions[action.type]) {
    return teamActions[action.type](state, action);
  }
};

export default reducer;
