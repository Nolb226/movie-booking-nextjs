import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    client: {
        MOVIE_API_URL: z.string().min(1),
    },
    runtimeEnv: {
        MOVIE_API_URL: process.env.MOVIE_API_URL,
    },
})
