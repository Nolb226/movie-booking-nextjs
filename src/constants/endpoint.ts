export const PARAMS = {
    MOVIE: ':slug',
    BILLING: ':id',
    SHOW: ':id',
}

export const ENDPOINTS = {
    AUTH: {
        LOGIN: '',
        REGISTER: '',
        PROFILE: '',
    },
    MOVIE: {
        STATUS: {
            'showing-now': '/movies/showing-now',
            'coming-soon': '/movies/coming-soon',
        },
        DETAIL: `/movies/${PARAMS.MOVIE}/shows`,
    },
    CINEMA: {
        LIST: '/cinemas',
        DETAIL: '',
    },
    SHOW: {
        SEAT: `/shows/${PARAMS.SHOW}/seats`,
    },
}

export const endpoint = (url: string, ids: any) => {
    let endpoint = url

    for (const key in ids) {
        endpoint = url.replace(
            `${PARAMS[key as keyof typeof PARAMS]}`,
            ids[key as keyof typeof ids]
        )
    }

    return endpoint
}
