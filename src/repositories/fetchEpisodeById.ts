import { cacheQuery } from "../helpers/cache-query.helper";

// https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20
type QueryKey = {
  queryKey: any[];
};

const fetchEpisodeById = async ({ queryKey }: QueryKey) => {
  const podcastId = queryKey[1];
  const episodeId = queryKey[2];
  const result = await cacheQuery(
    fetch,
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    )}`,
    `podcast-${podcastId}`
  );
  console.log(JSON.parse(result?.contents));
  const podcasts = JSON.parse(result?.contents || "null")?.results;
  const episode = podcasts.find((p) => p.trackId === +episodeId);
  return episode;
};

export default fetchEpisodeById;
