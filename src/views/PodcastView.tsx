import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { setLoading } from '../stores/podcast.slice';
import fetchEpisodes from '../repositories/fetchEpisodes';
import { PodcastDetails } from '../components/PodcastDetail';
import { EpisodesList } from '../components/EpisodesList';

import './PodcastView.sass';
import fetchPodcastList from '../repositories/fetchPodcastList';

export const PodcastView = () => {
    const dispatch = useDispatch();
    const { podcastId } = useParams();
    const podcasts = useQuery(["podcasts"], fetchPodcastList);
    const episodes = useQuery(["podcast", podcastId], fetchEpisodes);

    useEffect(() => {
      dispatch(setLoading(episodes.isLoading || podcasts.isLoading))
    },[episodes.isLoading, episodes.isLoading])
    
    const episodesList = useMemo(() => episodes.data ? episodes.data : null, [episodes.data]);
    const podcast = useMemo(() => {
      if (!podcastId) return [];
      return (
        podcasts?.data?.find((p: any) => +p.id.attributes['im:id'] === +podcastId) || null
      );
    }, [podcasts.data])
    
    return (
        <div className="entitylayout">
          {podcast && <PodcastDetails podcast={podcast}></PodcastDetails>}
          {episodesList && <EpisodesList episodesList={episodesList}></EpisodesList>}
        </div>
    )
}