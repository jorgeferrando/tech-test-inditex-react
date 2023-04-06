import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';

import './PodcastInfo.sass'

type PodcastInfoProps = {
    podcastInfo: any;
};

function formatDate(date: Date) {
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
}

function duration(milliseconds: number) : string {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
  
    const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  
    return `${formattedHours}:${formattedMinutes}`;
  }

export const PodcastInfo = ({podcastInfo} : PodcastInfoProps) => {
    const dispatch = useDispatch()
    return (
        <section className="podcast-info">
            <h2>{podcastInfo[0].collectionName}</h2>
            <section className="episodes-container">
                <table>
                    <thead>
                        <tr>
                            <th className="align-left">Title</th>
                            <th className="align-left">Date</th>
                            <th className="align-center">Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                    {podcastInfo && podcastInfo.slice(1).map((episode: any) => {
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