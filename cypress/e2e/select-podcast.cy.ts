import { episodesListMock } from "../fixtures/EpisodesList.mock";
import { podcastsListMock } from "../fixtures/PodcastsList.mock";

describe("Select podcast", () => {
  it("should click on a podcast and navigate to it", () => {
    cy.intercept(
      {
        method: "GET",
        url: `https://api.allorigins.win/get?url=${encodeURIComponent(
          "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
        )}`,
      },
      {
        contents: JSON.stringify({ feed: { entry: podcastsListMock } }),
      }
    ).as("GetPodcasts");
    const id = "1535809341";
    cy.intercept(
      {
        method: "GET",
        url: `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
        )}`,
      },
      {
        contents: JSON.stringify({ results: episodesListMock }),
      }
    ).as("GetPodcastById");
    cy.visit("http://localhost:5173");
    cy.get("input").type("Joe");
    cy.get("[data-testid=title]").first().click();
    cy.get("[data-testid=title]").should("have.text", "The Joe Budden Podcast");
  });
});
