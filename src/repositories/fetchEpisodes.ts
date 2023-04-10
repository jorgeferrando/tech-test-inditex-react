import { cacheQuery } from "../helpers/cache-query.helper";

// https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20
type QueryKey = {
  queryKey: any[];
};

const fetchEpisodes = async ({ queryKey }: QueryKey) => {
  const id = queryKey[1];
  const result = await cacheQuery(
    fetch,
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
    )}`,
    `podcast-${id}`
  );
  const episodes = JSON.parse(result?.contents || "null");
  const results = episodes.results;
  return results || null;
};

export default fetchEpisodes;
