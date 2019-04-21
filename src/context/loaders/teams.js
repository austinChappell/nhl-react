import { useEffect } from 'react';

// Internal Dependencies
import teamFetcher from '../fetcher/teams';

export function useLoadTeams(context) {
  return useEffect(() => {
    teamFetcher.getTeams(context);
  }, [])
}