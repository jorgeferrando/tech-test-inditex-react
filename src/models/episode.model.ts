export interface Episode {
  country: string;
  previewUrl: string;
  collectionViewUrl: string;
  trackTimeMillis: number;
  closedCaptioning: string;
  artistIds: number[];
  episodeFileExtension: string;
  episodeUrl: string;
  genres: Genre[];
  episodeGuid: string;
  releaseDate: Date;
  shortDescription: string;
  trackId: number;
  trackName: string;
  description: string;
  feedUrl: string;
  collectionId: number;
  collectionName: string;
  artworkUrl160: string;
  episodeContentType: string;
  artworkUrl60: string;
  artistViewUrl: string;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  artworkUrl600: string;
  kind: string;
  wrapperType: string;
}

export interface Genre {
  name: string;
  id: string;
}
