type DateString = string // Format: YYYY-MM-DD
type CommaSeparatedString = string // Values separated by commas (AND) or pipes (OR)
type SortByValue =
  | 'original_title.asc'
  | 'original_title.desc'
  | 'popularity.asc'
  | 'popularity.desc'
  | 'revenue.asc'
  | 'revenue.desc'
  | 'primary_release_date.asc'
  | 'primary_release_date.desc'
  | 'title.asc'
  | 'title.desc'
  | 'vote_average.asc'
  | 'vote_average.desc'
  | 'vote_count.asc'
  | 'vote_count.desc'
type WatchMonetizationType = 'flatrate' | 'free' | 'ads' | 'rent' | 'buy'
type ReleaseType = 1 | 2 | 3 | 4 | 5 | 6

export interface Movie {
  adult: boolean // Default: true
  backdrop_path: string | null
  genre_ids: number[]
  id: number // Default: 0
  original_language: string
  original_title: string
  overview: string
  popularity: number // Default: 0
  poster_path: string
  release_date: DateString
  title: string
  video: boolean // Default: true
  vote_average: number // Default: 0
  vote_count: number // Default: 0
}

export interface TMDBMovieResponse {
  page: number // Default: 0
  results: Movie[]
  total_pages: number // Default: 0
  total_results: number // Default: 0
}

export interface MovieDiscoverParams {
  'certification.gte'?: string
  'certification.lte'?: string
  'primary_release_date.gte'?: DateString
  'primary_release_date.lte'?: DateString
  'release_date.gte'?: DateString
  'release_date.lte'?: DateString
  'vote_average.gte'?: number
  'vote_average.lte'?: number
  'vote_count.gte'?: number
  'vote_count.lte'?: number
  'with_runtime.gte'?: number
  'with_runtime.lte'?: number
  certification?: string
  certification_country?: string
  include_adult?: boolean // Default: false
  include_video?: boolean // Default: false
  language?: string // Default: en-US
  page?: number // Default: 1
  primary_release_year?: number
  region?: string
  sort_by?: SortByValue // Default: popularity.desc
  watch_region?: string
  with_cast?: CommaSeparatedString
  with_companies?: CommaSeparatedString
  with_crew?: CommaSeparatedString
  with_genres?: CommaSeparatedString
  with_keywords?: CommaSeparatedString
  with_origin_country?: string
  with_original_language?: string
  with_people?: CommaSeparatedString
  with_release_type?: ReleaseType | CommaSeparatedString
  with_watch_monetization_types?: WatchMonetizationType
  with_watch_providers?: CommaSeparatedString
  without_companies?: string
  without_genres?: string
  without_keywords?: string
  without_watch_providers?: string
  year?: number
}

export interface MovieSearchBaseParams {
  include_adult?: boolean // Default: false
  language?: string // Default: en-US
  primary_release_year?: string
  page?: number // Default: 1
  region?: string
  year?: string
}

export interface MovieSearchParams extends MovieSearchBaseParams {
  query: string
}

export interface DefaultMovieParams {
  include_adult: boolean
  language: string
  page: number
}

export interface MovieWithGenres extends Omit<Movie, 'genre_ids'> {
  genres: string[]
}

export interface EnrichedMovieResponse extends Omit<TMDBMovieResponse, 'results'> {
  results: MovieWithGenres[]
}

export interface Genre {
  id: number
  name: string
}

export interface GenreResponse {
  genres: Genre[]
}

export interface GenreCache {
  data: Genre[]
  timestamp: number
}
