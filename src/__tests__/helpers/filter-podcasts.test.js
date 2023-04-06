import { expect, describe, it } from 'vitest';
import { filterPodcasts } from '../../helpers/fiter-podcasts.helper';
import { podcastsListMock } from '../mocks/PodcastsList.mock'

const podcasts = podcastsListMock;
describe("Filter Podcasts", () => {
    it('should return all podcasts if string received is empty', () => {
        const filteredItems = filterPodcasts(podcasts, "");
        expect(filteredItems).toHaveLength(podcasts.length);
    });
    it('it shoudl filter by the author', () => {
        const author = "iHeartPodcast";
        const filteredItems = filterPodcasts(podcasts, author);
        expect(filteredItems).toHaveLength(12);
    });
    it('it shoudl filter by the title', () => {
        const title = "On Air With Ryan Seacrest";
        const filteredItems = filterPodcasts(podcasts, title);
        expect(filteredItems).toHaveLength(1);
    });
    it('should not be case sensitive', () => {
        const title = "On Air With Ryan Seacrest";
        const uppercaseTitle = title.toUpperCase();
        const filteredItems = filterPodcasts(podcasts, title);
        const filteredItemsUppercase = filterPodcasts(podcasts, uppercaseTitle);
        expect(filteredItems).toEqual(filteredItemsUppercase);
    })
})