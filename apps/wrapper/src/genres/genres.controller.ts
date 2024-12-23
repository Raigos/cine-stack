import { Controller, Get } from '@nestjs/common'
import { GenresService } from './genres.service'
import { GenreNames } from '../types'

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  // Get all genres with name
  @Get()
  async getGenres(): Promise<GenreNames> {
    return this.genresService.getAllGenres()
  }
}
