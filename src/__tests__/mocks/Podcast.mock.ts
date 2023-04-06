import { Podcast } from "../../models/podcast.model";

export const podcastMock: Podcast = {
  "im:name": {
    label: "Biscuits & Jam",
  },
  "im:image": [
    {
      label:
        "https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ee/0a/55/ee0a556c-7bd5-3095-ef8b-ffac45451d92/mza_10899017392449298741.jpeg/55x55bb.png",
      attributes: {
        height: "55",
      },
    },
    {
      label:
        "https://is5-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ee/0a/55/ee0a556c-7bd5-3095-ef8b-ffac45451d92/mza_10899017392449298741.jpeg/60x60bb.png",
      attributes: {
        height: "60",
      },
    },
    {
      label:
        "https://is3-ssl.mzstatic.com/image/thumb/Podcasts122/v4/ee/0a/55/ee0a556c-7bd5-3095-ef8b-ffac45451d92/mza_10899017392449298741.jpeg/170x170bb.png",
      attributes: {
        height: "170",
      },
    },
  ],
  summary: {
    label:
      "In the South, talking about food is personal. It’s a way of sharing a part of your history, your family, your culture, and yourself. Each week, Sid Evans, Editor in Chief of Southern Living, will sit down with celebrity musicians to hear stories of how they grew up, what inspired them, and how they’ve been shaped by Southern culture. Sid will take us back to some of their most cherished memories and traditions, the family meals they still think about, and their favorite places to eat on the road.",
  },
  "im:price": {
    label: "Get",
    attributes: {
      amount: "0",
      currency: "USD",
    },
  },
  "im:contentType": {
    attributes: {
      term: "Podcast",
      label: "Podcast",
    },
  },
  rights: {
    label: "©2023 Meredith Corporation",
  },
  title: {
    label: "Biscuits & Jam - Southern Living",
  },
  link: {
    attributes: {
      rel: "alternate",
      type: "text/html",
      href: "https://podcasts.apple.com/us/podcast/biscuits-jam/id1510623480?uo=2",
    },
  },
  id: {
    label:
      "https://podcasts.apple.com/us/podcast/biscuits-jam/id1510623480?uo=2",
    attributes: {
      "im:id": "1510623480",
    },
  },
  "im:artist": {
    label: "Southern Living",
  },
  category: {
    attributes: {
      "im:id": "1310",
      term: "Music",
      scheme: "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
      label: "Music",
    },
  },
  "im:releaseDate": {
    label: "2023-04-04T01:00:00-07:00",
    attributes: {
      label: "April 4, 2023",
    },
  },
};
