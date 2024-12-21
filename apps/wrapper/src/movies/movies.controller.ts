import { Controller, Get, Query } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { MovieResponse, MovieDiscoverParams, MovieSearchParams } from '../types'

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  // Discover movies
  @Get('discover')
  async discoverMovies(@Query('genres') genres?: string): Promise<MovieResponse> {
    const genreIds = genres ? genres.split(',').map(Number) : []
    return this.moviesService.discoverMoviesByGenres(genreIds)
  }

  // Discover with params
  @Get()
  async getMovies(@Query() params: Partial<MovieDiscoverParams>): Promise<MovieResponse> {
    return this.moviesService.getMovies(params)
  }

  // Search my title
  @Get('search')
  async searchMovies(@Query() params: Partial<MovieSearchParams>): Promise<MovieResponse> {
    return this.moviesService.searchMoviesByTitle(params)
  }
}
