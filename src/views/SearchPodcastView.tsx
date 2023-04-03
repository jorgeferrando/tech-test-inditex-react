import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import './SearchPodcastView.sass';
export const SearchPodcastView = () => {
    return (
        <Fragment>
            <section className="search-bar">
                <div>100</div>
                <input type="text" />
            </section>
            <ul>
                <li><Link to={`/podcast/1`}>Podcast 1</Link></li>
                <li><Link to={`/podcast/2`}>Podcast 2</Link></li>
                <li><Link to={`/podcast/3`}>Podcast 3</Link></li>
            </ul>
        </Fragment>
    )
}