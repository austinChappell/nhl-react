import { getRequest } from '.';

// Local Variables
export function getTodaysGames() {
  const endpoint = '/schedule';
  return getRequest({ endpoint });
}
