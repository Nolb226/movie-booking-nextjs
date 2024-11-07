export const PARAMS = {
    MOVIE: ':slug',
    BILLING: ':id',
    SHOW: ':id',
}

export const ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '',
        PROFILE: '/user/profile',
        BILLING: '/bills/curr-user',
        BILLING_DETAILS: `/bills/curr-user/${PARAMS.BILLING}`,
        CHANGE_PASSWORD: '/user/change-password',
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
        SEAT: `/showtimes/${PARAMS.SHOW}/seats`,
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
