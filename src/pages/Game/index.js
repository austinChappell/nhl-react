// External Dependencies
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// Internal Dependencies
import { getGameFeed } from '../../api/games';
import LineScore from './LineScore';

// Local Variables
const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
const fetchGame = (gameId, setGameData, setLiveData) => async () => {
  try {
    const response = await getGameFeed(gameId);

    if (response.data.gameData) {
      setGameData(response.data.gameData);
      setLiveData(response.data.liveData);
    }
  } catch (error) {
    throw error;
  }
};

// Component Definition
const Game = ({ match }) => {
  const [gameData, setGameData] = useState(null);
  const [liveData, setLiveData] = useState(null);

  useEffect(() => {
    const getGameData = fetchGame(match.params.id, setGameData, setLiveData);
    getGameData();
    const stopInterval = setInterval(getGameData, 10000);

    return (() => {
      clearInterval(stopInterval);
    });
  }, [match.params.id]);

  if (!gameData || !liveData) {
    return null;
  }

  const plays = liveData.plays.allPlays.reverse().slice(0, 10);

  return (
    <div>
      <LineScore lineScore={liveData.linescore} />
      <ul>
        {plays.map(play => (
          <li key={play.about.eventIdx}>
            {play.result.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

Game.propTypes = propTypes;

export default Game;
