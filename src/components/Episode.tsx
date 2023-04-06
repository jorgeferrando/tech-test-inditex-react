import {default as dompurify} from 'dompurify';

import './Episode.sass';
import { convertUrlsToLinks, replaceNewlinesWithBr } from '../helpers/html.helper';

type Props = {
    episode: any;
};
export const Episode = ({episode} : Props) => {
    const description = replaceNewlinesWithBr(convertUrlsToLinks(episode.description));
    return (
        <section className="episodes">
            <h2 data-testid="title">{episode.trackName}</h2>
            <div className="episodes__description"
                 dangerouslySetInnerHTML={{__html:dompurify.sanitize(description)}}>
            </div>
            <audio controls>
                <source data-testid="audio" src={episode.episodeUrl} type={`${episode.episodeContentType}/${episode.episodeFileExtension}`} />
                Your browser does not support the audio element.
            </audio>
        </section>
    );
}