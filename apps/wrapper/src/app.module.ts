import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MoviesModule } from './movies/movies.module'
import { configuration, ENV_PATH, validationSchema } from './config/configuration'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
      envFilePath: ENV_PATH,
      validationOptions: {
        abortEarly: true,
      },
    }),
    MoviesModule,
  ],
})
export class AppModule {}
