import { BadRequestException, Controller, Get, Query } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { MovieDiscoverParams, EnrichedMovieResponse, MovieSearchBaseParams } from '../types'

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  // Discover movies
  @Get('discover')
  async discoverMovies(@Query('genres') genres?: string): Promise<EnrichedMovieResponse> {
    const genreIds = genres ? genres.split(',').map(Number) : []
    return this.moviesService.discoverMoviesByGenres(genreIds)
  }

  // Discover with params
  @Get()
  async getMovies(@Query() params: MovieDiscoverParams): Promise<EnrichedMovieResponse> {
    return this.moviesService.getMovies(params)
  }

  // Search my title
  @Get('search')
  async searchMovies(@Query('query') query: string, @Query() otherParams: MovieSearchBaseParams): Promise<EnrichedMovieResponse> {
    if (!query) {
      throw new BadRequestException('Query parameter is required')
    }

    return this.moviesService.searchMoviesByTitle({ query, ...otherParams })
  }
}
