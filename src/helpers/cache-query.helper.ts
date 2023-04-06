const expirationTime = 1000 * 60 * 60 * 24; // 1 day

export const cacheQuery = async (
  apiCall: (url: string) => Promise<any>,
  url: string,
  key: string
) => {
  const cachedData = localStorage.getItem(key);
  if (!cachedData) {
    try {
      const response = await apiCall.call(window, url);
      if (!response.ok) {
        // here there must be a better error handler based on response status
        throw new Error(`Error retrieving top 100 podcasts`);
      }
      const data = await response.json();
      localStorage.setItem(
        key,
        JSON.stringify({
          data,
          time: new Date().getTime(),
        })
      );
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  const cachedValue = JSON.parse(cachedData);
  const isExpired = +cachedValue.time + expirationTime < new Date().getTime();
  if (!isExpired) {
    return cachedValue.data;
  }
  const response = await apiCall.call(window, url);
  if (!response.ok) {
    // here there must be a better error handler based on response status
    throw new Error(`Error retrieving top 100 podcasts`);
  }
  const data = await response.json();
  localStorage.setItem(
    key,
    JSON.stringify({
      data,
      time: new Date().getTime(),
    })
  );
  return data;
};
