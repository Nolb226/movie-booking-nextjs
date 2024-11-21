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
      <aside className="flex h-fit flex-col justify-normal divide-dashed divide-primary-850 rounded-lg bg-white/[4%] px-7.5 py-2.5 ring-1 ring-inset ring-primary-900 lg:w-3/12 lg:divide-y">
         <div className="flex gap-2 py-3.75 lg:flex-col">
            <div className="flex gap-4">
               <div className="aspect-[5/7] w-[90px] overflow-hidden rounded bg-primary-900 sm:w-1/3">
                  <img src={currentMovie?.poster} alt={currentMovie?.name} />
               </div>
               <div className="flex w-2/3 flex-col">
                  <p className="font-semibold uppercase text-white">
                     {currentMovie?.name || 'MOVIE'}
                  </p>
                  <span className="text-[15px] text-slate-400">
                     {currentFormat
                        ? `${currentFormat.version} ${currentFormat.caption}`
                        : 'Format'}
                  </span>
               </div>
            </div>
            <div>
               <p className="text-[15px] font-semibold uppercase">Cinema</p>
               <span className="block min-h-5 text-sm text-slate-400">
                  {currentCinema?.name || ''}
               </span>
            </div>
            <div>
               <p className="text-[15px] font-semibold uppercase">Showtime</p>
               <span className="block min-h-5 text-sm text-slate-400">
                  {formatStartTime(currentShow?.startTime || '')}
               </span>
            </div>
         </div>
         <div className="bottom-0 left-0 right-0 w-full bg-[#0d1722] ring-1 ring-gray-200 max-lg:fixed max-lg:px-7 lg:ring-0">
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
