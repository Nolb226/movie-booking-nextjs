'use client'
import BookingSeat from '@/components/pages/booking/booking-seat'
import Payment from '@/components/pages/booking/payment'
import Selection from '@/components/pages/booking/selection'
import { useBookingContext } from '@/context/booking-context'
import { useCallback } from 'react'

export default function Page() {
   const { currentStep } = useBookingContext()
   const renderStep = useCallback(() => {
      switch (currentStep) {
         case 1:
            return <Selection />
         case 2:
            return <BookingSeat />
         case 3:
            return <Payment />
      }
   }, [currentStep])
   return <>{renderStep()}</>
}
