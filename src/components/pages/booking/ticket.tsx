'use client'
import { Button } from '@/components/ui/button'
import { useBookingContext } from '@/context/booking-context'

export default function Ticket() {
   const { cinema, movie, seats } = useBookingContext()
   return (
      <aside className="flex h-fit w-3/12 flex-col divide-y divide-dashed divide-primary-850 rounded-lg bg-white/[4%] px-7.5 py-2.5 ring-1 ring-inset ring-primary-900">
         <div className="flex gap-4 py-3.75">
            <div className="aspect-[5/7] w-1/3 overflow-hidden rounded bg-primary-900">
               <img src={movie?.poster} alt={movie?.name} />
            </div>
            <div className="flex w-2/3 flex-col">
               <p className="font-semibold uppercase text-white">
                  {movie?.name || 'MOVIE'}
               </p>
               <span className="text-[15px] text-slate-400">Format</span>
            </div>
         </div>
         <div className="flex flex-col gap-3.75 py-3.75">
            <div className="">
               <p className="text-[15px] font-semibold uppercase">Cinema</p>
               <span className="block min-h-5 text-sm text-slate-400">
                  {cinema?.name || ''}
               </span>
            </div>
            <div className="">
               <p className="text-[15px] font-semibold uppercase">Showtime</p>
               <span className="text-sm text-slate-400">18:00</span>
            </div>
            <div className="">
               <p className="text-[15px] font-semibold uppercase">
                  Ghế ({seats.length})
               </p>
               <span className="block min-h-4.5 text-sm uppercase text-slate-400">
                  {seats
                     .map((seat) => `${seat.rowName}${seat.rowIndex}`)
                     .join(', ')}
               </span>
            </div>
         </div>
         <div className="py-3.75">
            <p className="text-[15px] font-semibold uppercase">Ticket Price</p>
            <span className="text-sm text-slate-400">0 VND</span>
         </div>
         <div className="flex items-center justify-between py-3.75">
            <p className="text-lg font-semibold uppercase">Tổng</p>{' '}
            <span className="text-highlight-300">0 VNĐ</span>
         </div>
         <div className="flex gap-3 py-3.75">
            <Button className="flex-1" variant="secondary" size={'lg'}>
               Quay lại
            </Button>
            <Button className="flex-1" size={'lg'}>
               Tiếp tục
            </Button>
         </div>
      </aside>
   )
}