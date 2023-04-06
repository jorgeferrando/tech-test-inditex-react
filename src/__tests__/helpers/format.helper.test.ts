import { expect, describe, it } from "vitest";
import { duration, formatDate } from "../../helpers/format.helper";

describe("Format Helper - duration", () => {
  it("should return 00:00 if 0 is passed as argument", () => {
    expect(duration(0)).toBe("00:00");
  });

  it("should return 00:01 if 60000 is passed as argument", () => {
    expect(duration(60 * 1000)).toBe("00:01");
  });
  it("should return 00:10 if 600000 is passed as argument", () => {
    expect(duration(10 * 60 * 1000)).toBe("00:10");
  });
  it("should return 01:00 if 3600000 is passed as argument", () => {
    expect(duration(60 * 60 * 1000)).toBe("01:00");
  });
  it("should return 10:00 if 36000000 is passed as argument", () => {
    expect(duration(10 * 60 * 60 * 1000)).toBe("10:00");
  });
});

describe("Format Helper - formatDate", () => {
  it("should format the date correctly", () => {
    const date = new Date("2023-04-06");
    expect(formatDate(date)).toEqual("06/04/2023");
  });

  it("should format the date correctly for single-digit day and month", () => {
    const date = new Date("2023-01-01");
    expect(formatDate(date)).toEqual("01/01/2023");
  });

  it("should format the date correctly for December", () => {
    const date = new Date("2023-12-25");
    expect(formatDate(date)).toEqual("25/12/2023");
  });
});
