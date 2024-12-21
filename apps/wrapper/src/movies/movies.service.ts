import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom } from 'rxjs'
import { MovieResponse, MovieDiscoverParams, MovieSearchParams } from '../types'
import { GenresService } from '../genres/genres.service'

@Injectable()
export class MoviesService {
  // We inject ConfigService alongside our other dependencies
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

  async getMovies(params: Partial<MovieDiscoverParams> = {}): Promise<MovieResponse> {
    const defaultParams: Partial<MovieDiscoverParams> = {
      include_adult: false,
      language: 'en-US',
      page: 1,
    }

    const response = await firstValueFrom(
      this.httpService.get<MovieResponse>(`${this.tmdbBaseUrl}/discover/movie`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${this.tmdbAccessToken}`,
        },
        params: { ...defaultParams, ...params },
      }),
    )

    const enrichedResults = await this.genresService.mapGenreIdsToNames(response.data.results)

    return {
      page: response.data.page,
      results: enrichedResults,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results,
    }
  }

  async searchMoviesByTitle(params: Partial<MovieSearchParams> = {}): Promise<MovieResponse> {
    const defaultParams: Partial<MovieSearchParams> = {
      include_adult: false,
      language: 'en-US',
      page: 1,
    }

    const response = await firstValueFrom(
      this.httpService.get<MovieResponse>(`${this.tmdbBaseUrl}/search/movie`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${this.tmdbAccessToken}`,
        },
        params: { ...defaultParams, ...params },
      }),
    )

    return response.data
  }

  // This method remains largely the same since it uses getMovies internally
  async discoverMoviesByGenres(genres: number[]): Promise<MovieResponse> {
    const params: Partial<MovieDiscoverParams> = {
      with_genres: genres.join(','),
      include_adult: false,
      language: 'en-US',
      page: 1,
    }

    return this.getMovies(params)
  }
}
