import { expect, describe, it, beforeAll, afterAll } from 'vitest';
import { RenderResult, render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import { episodesListMock } from '../mocks/EpisodesList.mock';
import { EpisodesList } from '../../components/EpisodesList';

const episodes = episodesListMock;

describe('Episodes list', async () => {
    let episodesList: RenderResult
    beforeAll(() => {
        episodesList = render(
            <StaticRouter location={`/`}>
                <EpisodesList episodesList={episodes} />
            </StaticRouter>
        ) as any;
    })

    afterAll(() => {
        episodesList.unmount();
    })

    it('should render the title', async () => {
        const title = await episodesList.findByTestId('title')
        expect(title.textContent).toBe(episodes[0].collectionName);
    })

    it('should render all episodes', async () => {
        const title = await episodesList.findAllByTestId('episode-row')
        expect(title).toHaveLength(episodes.slice(1).length);
    })
})