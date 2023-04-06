import { cacheQuery } from "../helpers/cache-query.helper";
import { Episode } from "../models/episode.model";

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
  const episodes = JSON.parse(result?.contents || "null")?.results;
  const episode = episodes.find((e: Episode) => e.trackId === +episodeId);
  return episode;
};

export default fetchEpisodeById;
