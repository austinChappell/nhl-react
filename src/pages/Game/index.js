// External Dependencies
import React, { useEffect, useState } from 'react';
import { getGameFeed } from '../../api/games';
import LineScore from './LineScore';

const fetchGame = (gameId, setGameData, setLiveData) => async () => {
  try {
    const response = await getGameFeed(gameId);

    if (response.data.gameData) {
      setGameData(response.data.gameData)
      setLiveData(response.data.liveData)
    }
  } catch (error) {
    throw error;
  }
}

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
    })
  }, [match.params.id])

  if (!gameData || !liveData) {
    return null;
  }

  const plays = liveData.plays.allPlays.reverse().slice(0, 10);

  return (
    <div>
      <LineScore lineScore={liveData.linescore} />
      <ul>
        {plays.map((play, index) => (
          <li key={play.about.eventIdx}>
            {play.result.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
