'use client'
import React, { useMemo, useRef } from 'react'
import { Button } from './ui/button'

function DateFilter() {
    const today = useMemo(() => new Date(), [])
    const firstDayOfWeek = useMemo(
        () => today.getDate() - today.getDay(),
        [today]
    )
    const days = useRef([...Array(7)])
    return (
        <div>
            <div className="flex gap-4 rounded-[22px] bg-white/[4%] p-3">
                {days.current.map((date, index) => {
                    const day = new Date(
                        new Date().setDate(firstDayOfWeek + index)
                    )

                    return (
                        <Button
                            className="w-full"
                            disabled={day < today}
                            key={`date-${day.getDay()}`}
                        >
                            {day.getDate()}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default DateFilter
