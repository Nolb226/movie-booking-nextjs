import MovieThumbnail from '@/components/pages/movie/movie-thumbnail'
import { getMovies } from '@/service/movie'

export default async function Page() {
    const movies = await getMovies('showing-now', {
        page: 1,
        perPage: 4,
    })

    return (
        <>
            {movies.map(({ slug, horizontalPoster, name, poster }) => {
                return (
                    <MovieThumbnail
                        key={slug}
                        slug={slug}
                        poster={poster}
                        horizontalPoster={horizontalPoster}
                        name={name}
                    />
                )
            })}
        </>
    )
}
