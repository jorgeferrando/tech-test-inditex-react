import { expect, describe, it, beforeAll, afterAll } from 'vitest';
import { RenderResult, render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import { podcastMock } from '../mocks/Podcast.mock';
import { PodcastDetails } from '../../components/PodcastDetail';

const podcast = podcastMock;

describe('PodcastDetail', async () => {
    let podcastDetails: RenderResult
    beforeAll(() => {
        podcastDetails = render(
            <StaticRouter location={`/`}>
                <PodcastDetails podcast={podcast} />
            </StaticRouter>
        ) as any;
    })

    afterAll(() => {
        podcastDetails.unmount();
    })

    it('should have 2 links that points to podcast', async () => {
        const links = await podcastDetails.findAllByTestId('link-to-podcast')
        expect(links).toHaveLength(2);
        expect((links[0] as HTMLAnchorElement).href).toContain(podcast.id.attributes['im:id']);
        expect((links[0] as HTMLAnchorElement).href).toContain(podcast.id.attributes['im:id']);
    })
})
