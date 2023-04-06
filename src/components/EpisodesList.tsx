import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { duration, formatDate } from '../helpers/format.helper';

import './EpisodesList.sass'

type Props = {
    episodesList: any;
};

export const EpisodesList = ({episodesList} : Props) => {
    const dispatch = useDispatch()
    return (
        <section className="episodes">
            <h2>{episodesList[0].collectionName}</h2>
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
                    {episodesList && episodesList.slice(1).map((episode: any) => {
                            return (
                                <tr key={episode.trackId}>
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