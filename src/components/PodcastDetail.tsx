import { Link } from 'react-router-dom';
import './PodcastDetail.sass';
import {default as dompurify} from 'dompurify';

type PodcastDetailsProps = {
    podcast: any;
};
export const PodcastDetails = ({podcast} : PodcastDetailsProps) => {
    const id = podcast.id.attributes['im:id'];
    return (
        <section className='podcast-details'>
            <section className="podcast-container">
                <Link to={`/podcast/${id}`}>
                    <img src={podcast['im:image'][2].label} />
                </Link>
                <section className="podcast-title">
                    <div className="title"><Link to={`/podcast/${id}`}>{podcast['im:name'].label}</Link></div>
                    <div className="artist">by {podcast['im:artist'].label}</div>
                </section>
                <section className="podcast-description">
                    <h3>Description:</h3>
                    <div dangerouslySetInnerHTML={{__html:dompurify.sanitize(podcast.summary.label)}}></div>
                </section>
            </section>
        </section>
    )
}