import { expect, describe, it, vi } from "vitest";
import { cacheQuery, Storage } from "../../helpers/cache-query.helper";
const fakeFetch = (url: string) =>
  new Promise((resolve) => {
    return resolve({
      ok: true,
      json: () => new Promise((resolve) => resolve("test data from: " + url)),
    });
  });

const failFakeFetch = (url: string) =>
  new Promise((resolve) => {
    return resolve({
      ok: false,
      json: () => new Promise((resolve) => resolve("test data from: " + url)),
    });
  });

const storageBuiler = (s: any): Storage => ({
  getItem: (key: string) => s[key] as string,
  setItem: (key: string, value: string) => {
    s[key] = value;
  },
});

describe("CacheQuery Helper", () => {
  const fakeStorage: { [key: string]: any } = {};
  it("it should store data in the cache", async () => {
    const result = await cacheQuery(fakeFetch, "test", "test-key", {
      storage: storageBuiler(fakeStorage),
      expirationTimeInMillis: 0,
    });
    expect(fakeStorage["test-key"]).toBeDefined();
    expect(result).toBe("test data from: test");
  });
  it("should return cached", async () => {
    const cachedStorage = {
      "cached-key": JSON.stringify({ data: 1 }),
    };
    const result = await cacheQuery(fakeFetch, "test", "cached-key", {
      storage: storageBuiler(cachedStorage),
      expirationTimeInMillis: 500000,
    });
    expect(result).toBe(1);
  });
  it("should throw error if not ok and no cache storage", async () => {
    const fakeStorage: { [key: string]: any } = {};
    try {
      await cacheQuery(failFakeFetch, "fail", "fail-key", {
        storage: storageBuiler(fakeStorage),
        expirationTimeInMillis: 0,
      });
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
  it("should throw error if not ok and cache is expired", async () => {
    const fakeStorage: { [key: string]: any } = {
      key: JSON.stringify({ time: 0, data: 0 }),
    };
    try {
      await cacheQuery(failFakeFetch, "fail", "key", {
        storage: storageBuiler(fakeStorage),
        expirationTimeInMillis: -1000,
      });
    } catch (e) {
      expect(e).toBeDefined();
    }
  });
  it("should return json call with expired cache", async () => {
    const fakeStorage: { [key: string]: any } = {
      key: JSON.stringify({ time: 0, data: 0 }),
    };
    const result = await cacheQuery(fakeFetch, "good", "key", {
      storage: storageBuiler(fakeStorage),
      expirationTimeInMillis: -1000,
    });
    expect(result).toBe("test data from: good");
  });
});
