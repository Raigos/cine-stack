import { Injectable, Inject } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Cache } from 'cache-manager'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom } from 'rxjs'
import { AxiosResponse } from 'axios'
import { Genre, GenreResponse } from '@cine-stack/shared/src/'

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
      this.httpService.get<GenreResponse>(`${this.tmdbBaseUrl}/genre/movie/list`, {
        headers: {
          Authorization: `Bearer ${this.tmdbAccessToken}`,
        },
      }),
    )

    // Cache the results
    await this.cacheManager.set('all_genres', response.data.genres)
    return response.data.genres
  }
}
