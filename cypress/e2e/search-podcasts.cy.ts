import { podcastsListMock } from "../fixtures/PodcastsList.mock";
describe("Search podcast", () => {
  it("should write in the search bar and find the podcast", () => {
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
    cy.visit("http://localhost:5173");
    cy.wait(["@GetPodcasts"]);
    cy.get("input").type("Joe");
    cy.get(".podcastitem").should("have.length", 2);
    cy.get(".podcastitem")
      .get("[data-testid=title]")
      .first()
      .should("have.text", "The Joe Budden Podcast");
  });
});
