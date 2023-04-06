import { Fragment, useState, useMemo, useEffect } from 'react';
import './SearchPodcastView.sass';
import { PodcastItem } from '../components/PodcastItem';
import fetchPodcastList from '../repositories/fetchPodcastList';
import { useQuery } from '@tanstack/react-query';
import { filterPodcasts } from '../helpers/fiter-podcasts.helper';
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
            <section className="searchbar">
                <div className="searchbar__items">{podcasts.length || 0}</div>
                <input className="searchbar__input" type="text" onChange={event => {setSearchTerm(event.target.value)}}/>
            </section>
            <section className="podcastlist">
                {(!podcasts.length) ? (<h2>No Podcasts found!</h2>):(
                    podcasts.map(podcast =>(
                        <PodcastItem podcast={podcast} key={podcast.id.attributes['im:id']} />
                    ))
                )}
            </section>
        </Fragment>
    )
}