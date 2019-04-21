// External Dependencies
import PropTypes from 'prop-types';
import React, { useReducer } from 'react';

// Internal Dependencies
import teamsActions from './actions/teams';
import teamsReducer, {
  initialState as initialTeamsState,
} from './reducers/teams';

// Local Variables
const propTypes = {
  children: PropTypes.node.isRequired,
};
const initialState = {
  teams: initialTeamsState,
};
const reducer = (state = initialState, action) => {
  if (teamsActions[action.type]) {
    return teamsReducer(state, action);
  }
};
export const Context = React.createContext(initialState);

// Component Definition
const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ dispatch, state }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = propTypes;

export default AppContext;
