import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { GenresService } from './genres.service'
import { GenresController } from './genres.controller'
import { CacheModule } from '@nestjs/cache-manager'

@Module({
  imports: [
    HttpModule,
    CacheModule.registerAsync({
      useFactory: () => ({
        store: 'memory',
        ttl: 24 * 60 * 60 * 1000, // 24 hours
        max: 100,
      }),
    }),
  ],
  controllers: [GenresController],
  providers: [GenresService],
  exports: [GenresService],
})
export class GenresModule {}
