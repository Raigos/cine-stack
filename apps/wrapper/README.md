# TMDB API Wrapper Service

This service provides a NestJS-based wrapper around The Movie Database (TMDB) API, offering caching and simplified endpoints for movie discovery and search.

## Important Implementation Notes

The service uses NestJS's cache manager for improved performance. When working with the caching system, be aware of the following:

**Critical Note About Cache Manager Versions:**
- The service uses cache-manager `5.2.4`

If you encounter a "cacheManager.caching is not a function" error, verify that:
- Your cache-manager version matches the one specified in package.json as newer versions may cause compatibility issues

## API Endpoints

The service exposes several endpoints for interacting with movie data:
    
### Movies

- `GET /movies/discover?genres=<genre_ids>` - Discover movies by genre IDs
- `GET /movies?<params>` - Get movies with flexible parameter support
- `GET /movies/search?query=<search_term>` - Search movies by title

### Genres

- `GET /genres` - Get all available movie genres (cached for 24 hours)

## Project Structure

The service follows a modular NestJS architecture:
- `src/movies` - Movie-related functionality
- `src/genres` - Genre-related functionality
- `src/config` - Configuration and environment setup
- `../../packages/shared/types` - Shared TypeScript types between packages