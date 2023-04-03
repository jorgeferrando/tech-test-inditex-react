import { useParams, Link } from 'react-router-dom';
export const PodcastView = () => {
    const { podcastId } = useParams();
    return (
        <div>
            <h1>Podcast { podcastId }</h1>
            <ul>
                <li><Link to={`/podcast/${podcastId}/episode/1`}>Episode 1</Link></li>
                <li><Link to={`/podcast/${podcastId}/episode/2`}>Episode 2</Link></li>
                <li><Link to={`/podcast/${podcastId}/episode/3`}>Episode 3</Link></li>
            </ul>
        </div>
    )
}