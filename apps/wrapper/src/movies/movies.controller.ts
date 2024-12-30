import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { MovieSearchBaseParams } from '../types'
import { MovieDiscoverParams } from '@cine-stack/shared/src/'
import { TMDBMovieResponse } from '@cine-stack/shared/dist'

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  // Discover movies
  @Get('discover')
  async discoverMovies(@Query('genres') genres?: string): Promise<TMDBMovieResponse> {
    const genreIds = genres ? genres.split(',').map(Number) : []
    return this.moviesService.discoverMoviesByGenres(genreIds)
  }

  // Discover with params
  @Get()
  async getMovies(@Query() params: MovieDiscoverParams): Promise<TMDBMovieResponse> {
    return this.moviesService.getMovies(params)
  }

  // Search my title
  @Get('search')
  async searchMovies(@Query('query') query: string, @Query() otherParams: MovieSearchBaseParams): Promise<TMDBMovieResponse> {
    if (!query) {
      throw new BadRequestException('Query parameter is required')
    }

    return this.moviesService.searchMoviesByTitle({ query, ...otherParams })
  }
}
