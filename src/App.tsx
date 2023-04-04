import { useState } from 'react'
import './App.sass'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchPodcastView } from './views/SearchPodcastView'
import { PodcastView } from './views/PodcastView';
import { EpisodeView } from './views/EpisodeView';
import { MainLayout } from './layouts/MainLayout';
import { LoadingContext } from './contexts/loadingContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60 * 24,
      cacheTime: 1000 * 60 * 60 * 24
    }
  }
})

function App() {
  const [count, setCount] = useState(0)
  const loadingState = useState(false)
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LoadingContext.Provider value={loadingState}>
          <MainLayout>
            <Routes>
                <Route path="/" element={<SearchPodcastView />}></Route>
                <Route path="/podcast/:podcastId" element={<PodcastView />}></Route>
                <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeView />}></Route>
            </Routes>
          </MainLayout>
        </LoadingContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App
