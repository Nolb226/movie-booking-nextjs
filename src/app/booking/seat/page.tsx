import Screen from '@/components/pages/booking/screen'
import Seats from '@/components/pages/booking/seats'
import { Button } from '@/components/ui/button'
import React from 'react'

function Page() {
    return (
        <>
            <div className="flex w-9/12 flex-col justify-center gap-8 rounded-lg bg-white/[4%] ring-1 ring-inset ring-primary-900">
                <div className="flex items-center gap-8 rounded-t-lg bg-primary-900 px-8 py-4 ring-1 ring-inset ring-primary-850">
                    <p className="text-xl text-secondary-50">Showtime</p>
                    <div className="flex gap-2.5">
                        <Button variant={'showtime'}>13:00</Button>
                        <Button variant={'showtime'}>15:15</Button>
                        <Button variant={'showtime'}>17:30</Button>
                        <Button variant={'showtime'}>18:00</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-3 px-5.5 pb-8">
                    <div className="relative flex items-center justify-center">
                        <Seats />
                    </div>
                    <Screen />
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="size-6 rounded-sm bg-secondary-900 ring-2 ring-inset ring-primary-850"></div>
                            <span>Đã bán</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="size-6 rounded-sm bg-highlight-500 ring-2 ring-inset ring-highlight-400"></div>
                            <span>Đang chọn</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
