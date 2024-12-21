import { Injectable, Inject } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { HttpService } from '@nestjs/axios'
import { Genre, Movie } from '../types'
import { firstValueFrom } from 'rxjs'

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

    const response = await firstValueFrom(
      this.httpService.get<{ genres: Genre[] }>(`${this.tmdbBaseUrl}/genre/movie/list`, {
        headers: {
          Authorization: `Bearer ${this.tmdbAccessToken}`,
        },
      }),
    )

    await this.cacheManager.set('all_genres', response.data.genres)
    return response.data.genres
  }
  async mapGenreIdsToNames(movies: Movie[]): Promise<Movie[]> {
    const genres = await this.getAllGenres()
    return movies.map(movie => ({
      ...movie,
      genres: movie.genre_ids.map(id => genres.find(g => g.id === id)?.name || 'Unknown'),
    }))
  }
}
