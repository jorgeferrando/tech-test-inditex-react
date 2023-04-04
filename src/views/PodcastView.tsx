import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { setLoading } from '../stores/podcast.slice';
import fetchPodcastById from '../repositories/fetchPodcastsById';
export const PodcastView = () => {
    const dispatch = useDispatch();
    const { podcastId } = useParams();
    const result = useQuery(["podcast", podcastId], fetchPodcastById);
    const podcast = useSelector(state => state.podcasts.selectedPodcast);
    const podcastInfo = useMemo(() => {
        dispatch(setLoading(true))
        if (result.isLoading) {
          return null;
        }
        const data = result?.data?.contents || "[]";
        const info = (JSON.parse(data)).results;
        console.log(info)
        dispatch(setLoading(false))
        return info;
      }, [result]);
    return (
        <div>

        </div>
    )
}