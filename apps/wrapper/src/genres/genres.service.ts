import { Injectable, Inject } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { HttpService } from '@nestjs/axios'
import { Genre, GenreResponse, Movie, MovieWithGenres } from '../types'
import { firstValueFrom } from 'rxjs'
import { AxiosResponse } from 'axios'

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

  async getAllGenres(): Promise<Genre[]> {
    const cachedData = await this.cacheManager.get<Genre[]>('all_genres')
    if (cachedData) {
      return cachedData
    }

    const response: AxiosResponse<GenreResponse> = await firstValueFrom(
      this.httpService.get<{ genres: Genre[] }>(`${this.tmdbBaseUrl}/genre/movie/list`, {
        headers: {
          Authorization: `Bearer ${this.tmdbAccessToken}`,
        },
      }),
    )

    await this.cacheManager.set('all_genres', response.data.genres)
    return response.data.genres
  }

  async mapGenreIdsToNames(movies: Movie[]): Promise<MovieWithGenres[]> {
    const genres: Genre[] = await this.getAllGenres()

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
