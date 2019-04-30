// External Dependencies
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// Internal Dependencies
import { getTodaysGames } from '../../../api/schedule';
import GameSummary from '../../shared/GameSummary';
import Flex from '../../shared/Flex';
import { useResizeWindow } from '../../../hooks/use-resize-window';

// Local Variables
const propTypes = {
  onUpdateHeight: PropTypes.func.isRequired,
};

// Component Definition
const TodaysGames = ({
  onUpdateHeight,
}) => {
  const [dates, setDates] = useState(null);

  async function fetchGames() {
    try {
      const response = await getTodaysGames();

      if (response.data && response.data.dates) {
        setDates(response.data.dates);
      }

      onUpdateHeight();
    } catch (error) {
      throw error;
    }
  }

  useResizeWindow(onUpdateHeight);

  useEffect(() => {
    fetchGames();
  }, []);

  if (!dates) {
    return null;
  }

  return (
    <div>
      <h2>Today&apos;s Games</h2>
      <Flex>
        {dates.map(date => (
          date.games.map(game => (
            <div key={game.gamePk}>
              <GameSummary game={game} />
            </div>
          ))
        ))}
      </Flex>
    </div>
  );
};

TodaysGames.propTypes = propTypes;

export default TodaysGames;
