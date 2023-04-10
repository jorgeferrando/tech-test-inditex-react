import { expect, describe, it, beforeAll, afterAll } from 'vitest';
import { RenderResult, render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import { episodeMock } from '../mocks/Episode.mock';
import { Episode } from '../../components/Episode';

const episode = episodeMock;
episode.description = 'This is a test \n description http://myurl.com <button onclick="alert(`hola`)">bad code</button>';
const expectedDescription = 'This is a test  description http://myurl.com bad code';

describe('Episodes', async () => {
    let episodesList: RenderResult
    beforeAll(() => {
        episodesList = render(
            <StaticRouter location={`/`}>
                <Episode episode={episodeMock} />
            </StaticRouter>
        ) as any;
    })

    afterAll(() => {
        episodesList.unmount();
    })

    it('should diplay sanitized description', async () => {
        const description = await episodesList.findByTestId('description');
        console.log(description.textContent)
        expect(description.textContent).toBe(expectedDescription)
    })
})