import { Controller, Get } from '@nestjs/common'
import { GenresService } from './genres.service'
import { Genre } from '@cine-stack/shared/src'

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  // Get all genres with name
  @Get()
  async getGenres(): Promise<Genre[]> {
    return this.genresService.getAllGenres()
  }
}
