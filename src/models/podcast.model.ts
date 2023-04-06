export interface Podcast {
  "im:name": ImName;
  "im:image": ImImage[];
  summary: ImName;
  "im:price": ImPrice;
  "im:contentType": ImContentType;
  rights: ImName;
  title: ImName;
  link: Link;
  id: Id;
  "im:artist": ImArtist;
  category: Category;
  "im:releaseDate": ImReleaseDate;
}

export interface Category {
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  "im:id": string;
  term: string;
  scheme: string;
  label: string;
}

export interface Id {
  label: string;
  attributes: IdAttributes;
}

export interface IdAttributes {
  "im:id": string;
}

export interface ImArtist {
  label: string;
  attributes: ImArtistAttributes;
}

export interface ImArtistAttributes {
  href: string;
}

export interface ImContentType {
  attributes: ImContentTypeAttributes;
}

export interface ImContentTypeAttributes {
  term: string;
  label: string;
}

export interface ImImage {
  label: string;
  attributes: ImImageAttributes;
}

export interface ImImageAttributes {
  height: string;
}

export interface ImName {
  label: string;
}

export interface ImPrice {
  label: string;
  attributes: ImPriceAttributes;
}

export interface ImPriceAttributes {
  amount: string;
  currency: string;
}

export interface ImReleaseDate {
  label: Date;
  attributes: ImName;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  rel: string;
  type: string;
  href: string;
}
