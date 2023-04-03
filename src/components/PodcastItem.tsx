import {Link} from 'react-router-dom'
import './PodcastItem.sass'

type PodcastProps = {
    podcast: any;
};
export const PodcastItem = ({podcast} : PodcastProps) => {
    return (
        <Link to={`/podcast/${podcast.id.attributes['im:id']}`}>
        <article className="podcast-item">
            <img src={podcast['im:image'][0].label} />
            <div className="podcast-info">
                <section className="title">{podcast['im:name'].label}</section>
                <section className="author">Author: {podcast['im:artist'].label}</section>
            </div>
        </article>
        </Link>
    )
}