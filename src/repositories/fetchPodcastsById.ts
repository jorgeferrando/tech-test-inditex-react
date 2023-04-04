// https://itunes.apple.com/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20
type QueryKey = {
  queryKey: any[];
};

const fetchPodcastById = async ({ queryKey }: QueryKey) => {
  const id = queryKey[1];
  const apiRes = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
    )}`
  );
  //const apiRes = await fetch("src/assets/data.json");

  if (!apiRes.ok) {
    // here there must be a better error handler based on response status
    throw new Error(`Error retrieving podcasts '${id}' podcast`);
  }

  return apiRes.json();
};

export default fetchPodcastById;
