import './PodcastDetail.sass';

type PodcastDetailsProps = {
    podcast: any;
};
export const PodcastDetails = ({podcast} : PodcastDetailsProps) => {
    return (
        <section className='podcast-details'>
            <img src={podcast['im:image'][0].label} />
            <section className="podcast-title">
                <div>{podcast['im:name'].label}</div>
                <div>{podcast['im:artist'].label}</div>
            </section>
            <section className="podcast-description">
                <h3>Description:</h3>
                <div>
                    {podcast.summary.label}
                </div>
            </section>
        </section>
    )
}