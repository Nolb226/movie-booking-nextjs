'use client'
import { buyTickets } from '@/actions/user'
import { Button } from '@/components/ui/button'
import { useBookingContext } from '@/context/booking-context'
import { formatCurrency, formatStartTime } from '@/lib/utils'

export default function Ticket() {
   const {
      nextStep,
      prevStep,
      currentStep,
      currentCinema,
      currentMovie,
      currentShow,
      currentFormat,
      isDisable,
      seats,
   } = useBookingContext()

   return (
      <aside className="flex h-fit flex-col justify-normal divide-dashed divide-primary-850 rounded-lg bg-white/[4%] px-7.5 py-2.5 ring-1 ring-inset ring-primary-900 xl:w-3/12 xl:divide-y">
         <div className="grid grid-cols-3 items-center gap-2 py-3.75 xl:grid-rows-3">
            <div className="row-span-2 block md:row-span-1 md:hidden xl:row-span-2 xl:block xl:aspect-[5/7]">
               <img
                  className="h-[110px] w-[90px] scale-100 rounded object-cover blur-0 grayscale-0 duration-500 ease-in-out group-hover:opacity-100 md:h-[120px] md:w-[80px] xl:h-full xl:w-full"
                  src={currentMovie?.poster}
                  alt={currentMovie?.name}
               />
            </div>
            <div className="row-span-2 hidden md:row-span-1 md:block xl:row-span-2 xl:hidden">
               <img
                  src={currentMovie?.poster}
                  alt={currentMovie?.name}
                  className="h-[150px] w-[220px] scale-100 rounded object-cover blur-0 grayscale-0 duration-500 ease-in-out group-hover:opacity-100"
               />
            </div>
            <div className="col-span-2 row-span-1 md:col-span-1 xl:col-span-2">
               <p className="font-semibold uppercase text-white">
                  {currentMovie?.name || 'MOVIE'}
               </p>
               <span className="text-[15px] text-slate-400">
                  {currentFormat
                     ? `${currentFormat.version} ${currentFormat.caption}`
                     : 'Format'}
               </span>
            </div>
            <div className="col-span-2 flex justify-between gap-2 md:col-span-1 xl:col-span-3 xl:flex-col">
               <div className="flex flex-col">
                  <p className="text-xs font-semibold uppercase md:text-[15px]">
                     Cinema
                  </p>
                  <span className="block min-h-5 text-xs text-slate-400 sm:text-sm">
                     {currentCinema?.name || ''}
                  </span>
               </div>
               <div>
                  <p className="text-xs font-semibold uppercase md:text-[15px]">
                     Showtime
                  </p>
                  <span className="block min-h-5 text-sm text-slate-400">
                     {formatStartTime(currentShow?.startTime || '')}
                  </span>
               </div>
            </div>
         </div>
         <div className="right- bottom-0 left-4 w-full bg-[#0d1722] ring-1 ring-gray-200 max-xl:fixed max-xl:px-7 xl:ring-0">
            <div className="flex w-full flex-col gap-3.75 py-3.75">
               <div>
                  <p className="text-[15px] font-semibold uppercase">
                     Seat ({seats.length})
                  </p>
                  <span className="min-h-4.5 text-sm uppercase text-slate-400">
                     {seats
                        .map((seat) => `${seat.rowName}${seat.rowIndex}`)
                        .join(', ')}
                  </span>
               </div>
            </div>
            {/* <div className="py-3.75">
                <p className="text-[15px] font-semibold uppercase">Ticket Price</p>
                <span className="text-sm text-slate-400">0 VND</span>
             </div> */}
            <div className="flex items-center justify-between py-3.75">
               <p className="text-lg font-semibold uppercase">Totals</p>{' '}
               <span className="text-highlight-300">
                  {formatCurrency(
                     seats.reduce(
                        (acc, seat) => (acc += seat.seatType.price),
                        0
                     )
                  )}
               </span>
            </div>
            <div className="flex gap-3 py-3.75">
               <Button
                  disabled={currentStep === 1}
                  className="flex-1"
                  variant="secondary"
                  onClick={prevStep}
                  size={'lg'}
               >
                  Quay lại
               </Button>
               <Button
                  disabled={isDisable() || currentStep === 4}
                  className="flex-1"
                  onClick={() => {
                     if (currentStep <= 2) {
                        nextStep()
                     } else {
                        buyTickets(seats, currentShow!.id)
                     }
                  }}
                  size={'lg'}
               >
                  Tiếp tục
               </Button>
            </div>
         </div>
      </aside>
   )
}
