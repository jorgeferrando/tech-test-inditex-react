import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { setLoading } from '../stores/podcast.slice';
import fetchPodcastById from '../repositories/fetchPodcastsById';
import { PodcastDetails } from '../components/PodcastDetail';
import { PodcastInfo } from '../components/PodcastInfo';

import './PodcastView.sass';
import fetchPodcastList from '../repositories/fetchPodcastList';

export const PodcastView = () => {
    const dispatch = useDispatch();
    const { podcastId } = useParams();
    const podcastList = useQuery(["podcasts"], fetchPodcastList);
    const {data, isLoading} = useQuery(["podcast", podcastId], fetchPodcastById);
    const podcastFromStore = useSelector(state => state.podcasts.selectedPodcast);
    useEffect(() => {
      dispatch(setLoading(isLoading || podcastList.isLoading))
    },[isLoading, podcastList.isLoading])
    const podcastInfo = useMemo(() => data ? data : null, [data]);
    // in case we go direct insde the podcast view
    const podcast = useMemo(() => {
      return podcastFromStore || (
        podcastList?.data?.find((p: any) => p.id.attributes['im:id'] === podcastId) || null
      );
    }, [podcastFromStore, podcastList.data])
    return (
        <div className="details-layout">
          {podcast && <PodcastDetails podcast={podcast}></PodcastDetails>}
          {podcastInfo && <PodcastInfo podcastInfo={podcastInfo}></PodcastInfo>}
        </div>
    )
}