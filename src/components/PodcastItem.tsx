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
            <article className="podcast-item" onClick={() => dispatch(selectPodcast(podcast))}>
                <img src={podcast['im:image'][0].label} />
                <div className="podcast-meta">
                    <section className="title">{podcast['im:name'].label}</section>
                    <section className="author">Author: {podcast['im:artist'].label}</section>
                </div>
            </article>
        </Link>
    )
}