import { Injectable, Inject } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { HttpService } from '@nestjs/axios'
import { Movie, MovieWithGenres } from '../types'
import { firstValueFrom } from 'rxjs'
import { AxiosResponse } from 'axios'
import { Genre, GenreResponse, GenreNames } from '@cine-stack/shared/src/'

@Injectable()
export class GenresService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  private get tmdbBaseUrl(): string {
    return this.configService.get<string>('tmdb.baseUrl')
  }

  private get tmdbAccessToken(): string {
    return this.configService.get<string>('tmdb.accessToken')
  }

  private async getAllGenresInternal(): Promise<Genre[]> {
    const cachedData = await this.cacheManager.get<Genre[]>('all_genres')
    if (cachedData) {
      return cachedData
    }

    const response: AxiosResponse<GenreResponse> = await firstValueFrom(
      this.httpService.get<GenreResponse>(`${this.tmdbBaseUrl}/genre/movie/list`, {
        headers: {
          Authorization: `Bearer ${this.tmdbAccessToken}`,
        },
      }),
    )

    await this.cacheManager.set('all_genres', response.data.genres)
    return response.data.genres
  }

  async getAllGenres(): Promise<GenreNames> {
    const cachedNames = await this.cacheManager.get<GenreNames>('genre_names')
    if (cachedNames) {
      return cachedNames
    }

    const genres = await this.getAllGenresInternal()
    const genreNames = genres.map(genre => genre.name)

    await this.cacheManager.set('genre_names', genreNames)

    return genreNames
  }

  async mapGenreIdsToNames(movies: Movie[]): Promise<MovieWithGenres[]> {
    const genres = await this.getAllGenresInternal()

    const genreMap = genres.reduce(
      (map, genre) => {
        map[genre.id] = genre.name
        return map
      },
      {} as Record<number, string>,
    )

    return movies.map((movie: Movie) => ({
      ...movie,
      genres: movie.genre_ids.map(id => genreMap[id] || 'Unknown'),
    }))
  }
}
