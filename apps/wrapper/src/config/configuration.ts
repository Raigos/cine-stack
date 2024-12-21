import * as Joi from 'joi'
import * as path from 'path'

const getEnvPath = () => {
  return path.resolve(__dirname, '../../../../.env')
}

export const ENV_PATH = getEnvPath()

export const configuration = () => ({
  port: parseInt(process.env.WRAPPER_PORT, 10) || 3000,
  tmdb: {
    accessToken: process.env.TMDB_ACCESS_TOKEN,
    baseUrl: process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3',
  },
})

export const validationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  TMDB_ACCESS_TOKEN: Joi.string().required(),
  TMDB_BASE_URL: Joi.string().default('https://api.themoviedb.org/3'),
})
