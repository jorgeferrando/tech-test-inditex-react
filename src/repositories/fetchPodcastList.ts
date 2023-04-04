// https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json
type QueryKey = {
  queryKey: any[];
};

const fetchPodcastList = async ({ queryKey }: QueryKey) => {
  const apiRes = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )}`
  );
  //const apiRes = await fetch("src/assets/data.json");

  if (!apiRes.ok) {
    // here there must be a better error handler based on response status
    throw new Error(`Error retrieving top 100 podcasts`);
  }

  return apiRes.json();
};

export default fetchPodcastList;
