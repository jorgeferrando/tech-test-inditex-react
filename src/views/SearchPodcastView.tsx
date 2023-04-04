import { Fragment, useState, useEffect } from 'react';
import './SearchPodcastView.sass';
import usePodcastList from '../hooks/usePodcastList';
import { PodcastItem } from '../components/PodcastItem';

export const SearchPodcastView = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [podcasts] = usePodcastList();
    const [filteredPodcasts, setFilteredPodcasts] = useState(podcasts);
    const [numberOfPodcasts, setNumberOfPodcasts] = useState(0);
  
    useEffect(() => {
      const result = podcasts.filter(filterPodcast);
      setFilteredPodcasts(result);
      setNumberOfPodcasts(result.length);
    }, [searchTerm]);
  
    const filterPodcast = (podcast: any) => {
      if (searchTerm === "") {
        return true;
      } else if (
        podcast["im:name"].label
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        podcast["im:artist"].label
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
      return false;
    };
    return (
        <Fragment>
            <section className="search-bar">
                <div>{numberOfPodcasts}</div>
                <input type="text" onChange={event => {setSearchTerm(event.target.value)}}/>
            </section>
            <section className="podcast-list">
                {!filteredPodcasts.length ? (<h2>No Podcasts found!</h2>):(
                    filteredPodcasts.map(podcast =>(
                        <PodcastItem podcast={podcast} key={podcast.id.attributes['im:id']} />
                    ))
                )}
            </section>
        </Fragment>
    )
}