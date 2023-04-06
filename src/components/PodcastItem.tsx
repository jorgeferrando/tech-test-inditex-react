import {Link} from 'react-router-dom'
import './PodcastItem.sass'

import { useDispatch } from 'react-redux';
import { selectPodcast} from '../stores/podcast.slice'

type PodcastProps = {
    podcast: any;
};
export const PodcastItem = ({podcast} : PodcastProps) => {
    const dispatch = useDispatch()
    return (
        <Link to={`/podcast/${podcast.id.attributes['im:id']}`}>
            <article className="podcastitem" onClick={() => dispatch(selectPodcast(podcast))}>
                <img className="podcastitem__image" src={podcast['im:image'][2].label} />
                <div className="podcastitem__meta">
                    <section className="podcastitem__meta__title">{podcast['im:name'].label}</section>
                    <section className="podcastitem__meta__author">Author: {podcast['im:artist'].label}</section>
                </div>
            </article>
        </Link>
    )
}