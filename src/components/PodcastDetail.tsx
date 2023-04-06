import { Link } from 'react-router-dom';
import './PodcastDetail.sass';
import {default as dompurify} from 'dompurify';

type PodcastDetailsProps = {
    podcast: any;
};
export const PodcastDetails = ({podcast} : PodcastDetailsProps) => {
    const id = podcast.id.attributes['im:id'];
    return (
        <section className='podcastdetails'>
            <section className="podcastdetails__container">
                <Link to={`/podcast/${id}`} data-testid="link-to-podcast">
                    <img src={podcast['im:image'][2].label} />
                </Link>
                <section className="podcastdetails__container__meta">
                    <div className="podcastdetails__container__meta__title"><Link data-testid="link-to-podcast" to={`/podcast/${id}`}>{podcast['im:name'].label}</Link></div>
                    <div className="podcastdetails__container__meta__artist">by {podcast['im:artist'].label}</div>
                </section>
                <section className="podcastdetails__container__description">
                    <h3>Description:</h3>
                    <div dangerouslySetInnerHTML={{__html:dompurify.sanitize(podcast.summary.label)}}></div>
                </section>
            </section>
        </section>
    )
}