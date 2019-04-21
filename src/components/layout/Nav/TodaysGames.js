// External Dependencies
import React, { useEffect, useState } from 'react';

// Internal Dependencies
import { getTodaysGames } from '../../../api/schedule';
import GameSummary from '../../shared/GameSummary';

// Component Definition
const TodaysGames = () => {
  const [dates, setDates] = useState(null);

  async function fetchGames() {
    try {
      const response = await getTodaysGames();

      if (response.data && response.data.dates) {
        setDates(response.data.dates);
      }
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchGames();
  }, []);

  if (!dates) {
    return null;
  }

  return (
    <div>
      <h2>Today's Games</h2>
      {dates.map(date => (
        date.games.map(game => (
          <div key={game.gamePk}>
            <GameSummary game={game} />
          </div>
        ))
      ))}
    </div>
  );
};

export default TodaysGames;
