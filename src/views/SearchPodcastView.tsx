import { Link } from 'react-router-dom';
export const SearchPodcastView = () => {
    return (
        <div>
            <h1>Top podcasts</h1>
            <ul>
                <li><Link to={`/podcast/1`}>Podcast 1</Link></li>
                <li><Link to={`/podcast/2`}>Podcast 2</Link></li>
                <li><Link to={`/podcast/3`}>Podcast 3</Link></li>
            </ul>
        </div>
    )
}