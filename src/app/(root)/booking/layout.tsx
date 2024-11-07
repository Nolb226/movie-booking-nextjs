import Ticket from '@/components/pages/booking/ticket'
import { Step, Steps } from '@/components/steps'
import { Button } from '@/components/ui/button'
import { BookingProvider } from '@/context/booking-context'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="mx-auto flex w-[1440px] flex-col gap-5.5 pb-10 pt-6">
            <div className="rounded-lg bg-white/[4%] py-2">
                <Steps>
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                </Steps>
            </div>
            <div className="flex gap-5.5">
                <BookingProvider>
                    {children}
                    <Ticket />
                </BookingProvider>
            </div>
        </section>
    )
}
