import { getTeams } from '../../api/teams';
import ACTION_TYPES from '../actions'

class TeamFetcher {
  getTeams = async(context) => {
    const requestId = Date.now();
    this.getTeamsRequestId = requestId;
    context.dispatch({
      type: ACTION_TYPES.TEAMS_GET_REQUEST
    });
    try {
      const response = await getTeams();

      context.dispatch({
        payload: {
          teams: response.data.teams,
        },
        type: ACTION_TYPES.TEAMS_GET_SUCCESS,
      })

    } catch (error) {
      throw error;
    }
  }
}

export default new TeamFetcher();
