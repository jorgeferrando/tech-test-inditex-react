import './PodcastDetail.sass';
import {default as dompurify} from 'dompurify';

type PodcastDetailsProps = {
    podcast: any;
};
export const PodcastDetails = ({podcast} : PodcastDetailsProps) => {
    return (
        <section className='podcast-details'>
            <section className="podcast-container">
                <img src={podcast['im:image'][0].label} />
                <section className="podcast-title">
                    <div className="title">{podcast['im:name'].label}</div>
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