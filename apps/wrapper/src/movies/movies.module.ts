import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { MoviesController } from './movies.controller'
import { MoviesService } from './movies.service'
import { GenresModule } from '../genres/genres.module'

@Module({
  imports: [HttpModule, GenresModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
