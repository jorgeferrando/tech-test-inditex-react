import { Link } from 'react-router-dom'
import { duration, formatDate } from '../helpers/format.helper';

import './EpisodesList.sass'

type Props = {
    episodesList: any;
};

export const EpisodesList = ({episodesList} : Props) => {
    const title = episodesList && episodesList[0].collectionName;
    const episodes = episodesList && episodesList.slice(1);
    return (
        <section className="episodes">
            <h2 data-testid="title">{title}</h2>
            <section className="episodes__container">
                <table>
                    <thead>
                        <tr>
                            <th className="align-left">Title</th>
                            <th className="align-left">Date</th>
                            <th className="align-center">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                    {episodes && episodes.map((episode: any) => {
                            return (
                                <tr data-testid="episode-row" key={episode.trackId}>
                                    <td className="align-left">
                                        <Link to={`episode/${episode.trackId}`}>{episode.trackName}</Link>
                                    </td>
                                    <td className="align-left">{formatDate(new Date(episode.releaseDate))}</td>
                                    <td className="align-center">{duration(episode.trackTimeMillis)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        </section>
    )
}