import { useParams } from 'react-router-dom';
export const EpisodeView = () => {
    const { podcastId, episodeId } = useParams();
    return (
        <h1>Episode { episodeId } of Podcast { podcastId }</h1>
    )
}