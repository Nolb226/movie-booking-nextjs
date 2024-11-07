import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatCurrency(currency: number) {
    const { format } = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    })
    return format(currency)
}

export function formatStartTime(startTime: string) {
    return startTime.split(':').slice(0, 2).join(':')
}

export function formatTime(time: string) {
    const { format } = new Intl.DateTimeFormat('vi-VN', {
        weekday: 'long',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    })
    return format(new Date(time))
}

export function getCookie(cname: string) {
    let name = cname + '='
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ''
}
