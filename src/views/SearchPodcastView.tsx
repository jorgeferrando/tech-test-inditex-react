import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import './SearchPodcastView.sass';
import usePodcastList from '../hooks/usePodcastList';
import { PodcastItem } from '../components/PodcastItem';

export const SearchPodcastView = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [podcasts] = usePodcastList();
    return (
        <Fragment>
            <section className="search-bar">
                <div>{podcasts?.length ?? 0}</div>
                <input type="text" />
            </section>
            <section className="podcast-list">
                {!podcasts.length ? (<h2>No Podcasts found!</h2>):(
                    podcasts.map(podcast =>(
                        <PodcastItem podcast={podcast} key={podcast.id.attributes['im:id']} />
                    ))
                )}
            </section>
        </Fragment>
    )
}