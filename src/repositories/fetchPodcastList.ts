import { cacheQuery } from "../helpers/cache-query.helper";
import { Podcast } from "../models/podcast.model";

// https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json
type QueryKey = {
  queryKey: any[];
};

const fetchPodcastList = async ({ queryKey }: QueryKey) => {
  const result = await cacheQuery(
    fetch,
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )}`,
    "podcastList"
  );
  //const apiRes = await fetch("src/assets/data.json");

  const contents = result?.contents || "[]";
  const data = JSON.parse(contents);

  return (data?.feed?.entry as Podcast[]) || [];
};

export default fetchPodcastList;
