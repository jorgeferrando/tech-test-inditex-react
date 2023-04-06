import { expect, describe, it, beforeAll, afterAll } from 'vitest';
import { RenderResult, render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import { PodcastItem } from '../../components/PodcastItem';
import { podcastMock } from '../mocks/Podcast.mock';

const podcast = podcastMock;

describe('PodcastItem', async () => {
    let podcastItem: RenderResult;
    beforeAll(() => {
        podcastItem = render(
            <StaticRouter location={`/`}>
                <PodcastItem podcast={podcast} />
            </StaticRouter>
        );
    })

    afterAll(() => {
        podcastItem.unmount();
    })

    it('should assing the image with index "2" to the img element', async () => {
        const podcastThumbnail = await podcastItem.findByTestId('thumbnail') as HTMLImageElement;
        expect(podcastThumbnail.src).toContain(podcast['im:image'][2].label)
    })
    it('should display title', async () => {
        const titleSection = await podcastItem.findByTestId('title');
        expect(titleSection.textContent).toContain(podcast['im:name'].label)
    })
    it('should display artist', async () => {
        const authorSection = await podcastItem.findByTestId('artist');
        expect(authorSection.textContent).toContain(podcast['im:artist'].label)
    });
});