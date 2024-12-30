import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom } from 'rxjs'
import { MovieSearchParams, DefaultMovieParams } from '../types'
import { GenresService } from '../genres/genres.service'
import { TMDBMovieResponse, MovieDiscoverParams } from '@cine-stack/shared/src'
const DEFAULT_PARAMS: DefaultMovieParams = {
  language: 'en-US',
  page: 1,
  include_adult: false,
} as const

@Injectable()
export class MoviesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly genresService: GenresService,
    private readonly configService: ConfigService,
  ) {}

  private get tmdbBaseUrl(): string {
    return this.configService.get<string>('tmdb.baseUrl')
  }

  private get tmdbAccessToken(): string {
    return this.configService.get<string>('tmdb.accessToken')
  }

  async getMovies(params: MovieDiscoverParams = {}): Promise<TMDBMovieResponse> {
    const response = await firstValueFrom(
      this.httpService.get<TMDBMovieResponse>(`${this.tmdbBaseUrl}/discover/movie`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${this.tmdbAccessToken}`,
        },
        params: { ...DEFAULT_PARAMS, ...params },
      }),
    )

    return {
      page: response.data.page,
      results: response.data.results,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results,
    }
  }

  async searchMoviesByTitle(params: MovieSearchParams): Promise<TMDBMovieResponse> {
    const response = await firstValueFrom(
      this.httpService.get<TMDBMovieResponse>(`${this.tmdbBaseUrl}/search/movie`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${this.tmdbAccessToken}`,
        },
        params: { ...DEFAULT_PARAMS, ...params },
      }),
    )

    return {
      page: response.data.page,
      results: response.data.results,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results,
    }
  }

  async discoverMoviesByGenres(genres: number[]): Promise<TMDBMovieResponse> {
    const params: MovieDiscoverParams = {
      with_genres: genres.join(','),
      ...DEFAULT_PARAMS,
    }

    return this.getMovies(params)
  }
}
