import { cacheQuery } from "../helpers/cache-query.helper";

// https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20
type QueryKey = {
  queryKey: any[];
};

const fetchPodcastById = async ({ queryKey }: QueryKey) => {
  const id = queryKey[1];
  const result = await cacheQuery(
    fetch,
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
    )}`,
    `podcast-${id}`
  );
  console.log(JSON.parse(result?.contents));
  return JSON.parse(result?.contents || "null")?.results || null;
};

export default fetchPodcastById;
