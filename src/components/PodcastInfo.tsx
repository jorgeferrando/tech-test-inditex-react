import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { selectEpisode } from '../stores/podcast.slice';

type PodcastInfoProps = {
    podcastInfo: any;
};

function formatDate(date: Date) {
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
}

function duration(miliseconds: number) {
    const seconds = Math.floor(miliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return (hours > 0 ? `${hours}h ` : '') + (minutes > 0 ? `${minutes}m ` : '') + (seconds > 0 ? `${seconds}s` : '');
}

export const PodcastInfo = ({podcastInfo} : PodcastInfoProps) => {
    const dispatch = useDispatch()
    return (
        <section>
            <h2>{podcastInfo[0].title}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                {podcastInfo && podcastInfo.slice(1).map((episode: any) => {
                        return (
                            <tr key={episode.episodeGuid}>
                                <td onClick={() => dispatch(selectEpisode(episode))}>
                                    <Link to={`episode/${episode.episodeGuid}`}>{episode.trackName}</Link>
                                </td>
                                <td>{formatDate(new Date(episode.releaseDate))}</td>
                                <td>{duration(episode.trackTimeMillis)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    )
}