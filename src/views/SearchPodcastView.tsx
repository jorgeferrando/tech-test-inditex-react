import { Fragment, useState, useMemo, useContext, useEffect } from 'react';
import './SearchPodcastView.sass';
import { PodcastItem } from '../components/PodcastItem';
import fetchPodcastList from '../repositories/fetchPodcastList';
import { useQuery } from '@tanstack/react-query';
import { filterPodcasts } from '../helpers/fiterpodcasts.helper';
import { useDispatch } from 'react-redux';
import { setLoading} from '../stores/podcast.slice'

export const SearchPodcastView = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const results = useQuery(["podcasts"], fetchPodcastList);
    const dispatch = useDispatch();
    
    // update podcasts on change
    const podcasts = useMemo(() => {
      dispatch(setLoading(true))
      if (results.isLoading) {
        return [];
      }
      const data = results?.data?.contents || "[]";
      const feed = JSON.parse(data);
      dispatch(setLoading(false))
      return filterPodcasts(feed.feed.entry, searchTerm);
    }, [results, searchTerm]);
    
    return (
        <Fragment>
            <section className="search-bar">
                <div>{podcasts.length || 0}</div>
                <input type="text" onChange={event => {setSearchTerm(event.target.value)}}/>
            </section>
            <section className="podcast-list">
                {(!podcasts.length) ? (<h2>No Podcasts found!</h2>):(
                    podcasts.map(podcast =>(
                        <PodcastItem podcast={podcast} key={podcast.id.attributes['im:id']} />
                    ))
                )}
            </section>
        </Fragment>
    )
}