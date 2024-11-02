import BookingSeat from '@/components/pages/booking/booking-seat'
import Screen from '@/components/pages/booking/screen'
import Seats from '@/components/pages/booking/seats'
import { Button } from '@/components/ui/button'
import { getShowSeat } from '@/service/show'
import React from 'react'

async function Page({ params }: { params: { showId: string } }) {
   const data = await getShowSeat(params.showId)

   return <BookingSeat data={data} />
}

export default Page
