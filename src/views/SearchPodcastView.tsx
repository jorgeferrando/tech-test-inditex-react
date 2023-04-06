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
    const { data, isLoading} = useQuery(["podcasts"], fetchPodcastList);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoading(isLoading))
      },[isLoading])
    // update podcasts on change
    const podcasts = useMemo(() => data ? filterPodcasts(data, searchTerm) : [], [data, searchTerm]);
    
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