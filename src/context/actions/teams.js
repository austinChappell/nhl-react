import ACTION_TYPES from '.';

const actions = {
  [ACTION_TYPES.TEAMS_GET_REQUEST]: (state, action) => {
    const teams = { ...state.teams, loading: true };
    return {
      ...state,
      teams,
    };
  },
  [ACTION_TYPES.TEAMS_GET_SUCCESS]: (state, action) => {
    const teams = {
      ...state.teams,
      data: action.payload.teams,
      loading: false,
    };
    return {
      ...state,
      teams,
    };
  },
};

export default actions;
