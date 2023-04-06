import { cacheQuery } from "../helpers/cache-query.helper";

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
  console.log(JSON.parse(contents));
  return data?.feed?.entry || [];
};

export default fetchPodcastList;
