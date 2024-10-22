export type Show = {
    id: string
    runningTime: number
    startDate: Date
    endDate: Date
    status: boolean
}

export type Seat = {
    id: string
    status: boolean
    rowIndex: number
    rowName: string
    order: number
    isReserved: boolean
}

export type ShowSeat = Show & { seats: Seat[] }
