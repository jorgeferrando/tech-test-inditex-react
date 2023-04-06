const expirationTime = 1000 * 60 * 60 * 24; // 1 day

export interface Storage {
  getItem: (key: string) => string;
  setItem: (key: string, value: string) => void;
}

export const cacheQuery = async (
  apiCall: (url: string) => Promise<any>,
  url: string,
  key: string,
  config: {
    storage: Storage;
    expirationTimeInMillis: number;
  } = {
    storage: localStorage as Storage,
    expirationTimeInMillis: expirationTime,
  }
) => {
  const cachedData = config.storage.getItem(key);
  if (!cachedData) {
    try {
      const response = await apiCall.call(window, url);
      if (!response.ok) {
        // here there must be a better error handler based on response status
        throw new Error(`Error retrieving top 100 podcasts`);
      }
      const data = await response.json();
      config.storage.setItem(
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
  const isExpired =
    +cachedValue.time + config.expirationTimeInMillis < new Date().getTime();
  console.log({
    cachedValueTime: cachedValue.time,
    cacheTime: +cachedValue.time + config.expirationTimeInMillis,
    today: new Date().getTime(),
  });
  if (!isExpired) {
    return cachedValue.data;
  }
  const response = await apiCall.call(window || global, url);
  if (!response.ok) {
    // here there must be a better error handler based on response status
    throw new Error(`Error retrieving api call from ${url}`);
  }
  const data = await response.json();
  config.storage.setItem(
    key,
    JSON.stringify({
      data,
      time: new Date().getTime(),
    })
  );
  return data;
};
