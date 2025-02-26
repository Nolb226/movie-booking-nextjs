'use client'
import Ticket from '@/components/pages/booking/ticket'
import { Step } from '@/components/steps'
import { Button } from '@/components/ui/button'
import { BookingProvider } from '@/context/booking-context'
import React, { useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <section className="mx-auto flex max-w-[1440px] flex-col gap-5.5 pb-10 pt-6">
         <div className="rounded-lg bg-white/[4%] py-2">
            <div className="flex items-center justify-center px-7.5 lg:px-0">
               <Step value="1" label="Select Movie" />
               <Step value="2" label="Select Seat" />
               <Step value="3" label="Payment" />
               <Step value="4" label="Confirm" />
            </div>
         </div>
         <div className="flex flex-col-reverse gap-5.5 xl:flex-row">
            {children}
            <Ticket />
         </div>
      </section>
   )
}
