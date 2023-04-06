import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PodcastDetails } from '../components/PodcastDetail';
import fetchPodcastList from '../repositories/fetchPodcastList';
import { useEffect, useMemo } from 'react';
import { setLoading } from '../stores/podcast.slice';
import { Episode } from '../components/Episode';
import fetchEpisodeById from '../repositories/fetchEpisodeById';

export const EpisodeView = () => {
    const dispatch = useDispatch();
    const { podcastId, episodeId } = useParams();
    const episodeList = useQuery(["podcasts"], fetchPodcastList);
    const {data, isLoading} = useQuery(["episode", podcastId, episodeId], fetchEpisodeById);
    const podcastFromStore = useSelector(state => state.podcasts.selectedPodcast);
    useEffect(() => {
      dispatch(setLoading(isLoading || episodeList.isLoading))
    },[isLoading, episodeList.isLoading])
    const episode = useMemo(() => data ? data : null, [data]);
    // in case we go direct insde the podcast view
    const podcast = useMemo(() => {
      return podcastFromStore || (
        episodeList?.data?.find((p: any) => p.id.attributes['im:id'] === podcastId) || null
      );
    }, [podcastFromStore, episodeList.data])
    return (
        <div className="entitylayout">
          {podcast && <PodcastDetails podcast={podcast}></PodcastDetails>}
          {episode && <Episode episode={episode}></Episode>}
        </div>
    )
}