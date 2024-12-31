import { Movie, Genre } from '@cine-stack/shared/dist'

interface FilterOptions {
  page?: number
  pageSize?: number
}

export const filterMoviesByGenres = (
  movies: Movie[] | null | undefined,
  genres: (Genre | string)[] | null | undefined,
  options: FilterOptions = {},
) => {
  if (!movies?.length || !genres?.length) {
    return {
      results: movies || [],
      totalCount: movies?.length || 0,
    }
  }

  const genreIds = genres.map(genre => (typeof genre === 'string' ? Number(genre) : genre.id))

  const filteredMovies = movies.filter(movie => genreIds.every(genreId => movie.genre_ids.includes(genreId)))

  if (options.page !== undefined && options.pageSize) {
    const startIndex = (options.page - 1) * options.pageSize
    const endIndex = startIndex + options.pageSize

    return {
      results: filteredMovies.slice(startIndex, endIndex),
      totalCount: filteredMovies.length,
      totalPages: Math.ceil(filteredMovies.length / options.pageSize),
    }
  }

  return {
    results: filteredMovies,
    totalCount: filteredMovies.length,
  }
}
