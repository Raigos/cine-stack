export interface Genre {
  id: number
  name: string
}

export interface GenreResponse {
  genres: Genre[]
}

export type GenreNames = Genre['name'][]
