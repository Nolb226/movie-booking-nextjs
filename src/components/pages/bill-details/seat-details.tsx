import { formatCurrency } from '@/lib/utils'

export default function SeatDetails({
   id,
   price,
   seatName,
   type,
}: {
   id: string
   seatName: string
   price: number
   type: string
}) {
   return (
      <div>
         <div className="mb-1 text-sm text-gray-500">Tickets info</div>
         <div className="flex flex-col gap-0.5 text-sm">
            <div className="font-semibold">Seat-{seatName}</div>
            <div className="text-gray-500">{type}</div>
            <div className="text-highlight-300">{formatCurrency(price)}</div>
         </div>
      </div>
   )
}
