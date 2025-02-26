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

export const formatDateWeekday = (day: string): string => {
   const { format } = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
   })
   return format(new Date(day))
}

export const formatDuration = (duration: number): string => {
   const hours = Math.floor(duration / 60)
   const minutes = duration % 60
   return `${hours}h ${minutes}m`
}

export function areDatesEqual(date1: Date, date2: Date): boolean {
   return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
   )
}
