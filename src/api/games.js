import { getRequest } from '.';

// Local Variables
export function getGameFeed(gamePk) {
  const endpoint = `/game/${gamePk}/feed/live`;
  return getRequest({ endpoint });
}
