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
