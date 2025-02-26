import { Input } from '@/components/ui/input'
import { formatCurrency, formatStartTime } from '@/lib/utils'
import { Bill } from '@/model/bill'
import Link from 'next/link'
import BillDialog from './bill-dialog'

export default async function ProfileTicket({ bills }: { bills: Bill[] }) {
    return (
        <>
            <div className="flex flex-col">
                <p className="text-xl">My tickets</p>
                <span className="text-sm text-gray-700">Recently</span>
            </div>
            <div className="mt-6 flex flex-col gap-4">
                {bills.map((bill) => (
                    <BillListingItem {...bill} key={bill.id} />
                ))}
            </div>
        </>
    )
}

const BillListingItem = (bill: Bill) => {
    return (
        <div className="relative">
            <div className="flex gap-2 rounded-lg bg-white/[4%] bg-gradient-to-r from-white/[8%] from-95% to-primary-700 p-2">
                <div className="aspect-square w-24">
                    <img
                        className="h-full w-full rounded-md object-cover"
                        src={bill.movie.poster}
                        alt=""
                    />
                </div>
                <div className="flex flex-1 justify-between">
                    <div className="line-clamp-1 flex w-1/3 flex-col font-semibold">
                        <h4>
                            {bill.movie.name} / {bill.movie.subName}
                        </h4>
                        <span className="text-xs text-gray-200">
                            {bill.show.format}
                        </span>
                        <span className="text-primary-500">
                            {formatCurrency(bill.total)}
                        </span>
                    </div>
                    <div className="flex w-1/3 flex-col gap-2 self-center text-sm">
                        <span>
                            {bill.cinema.name}/ {bill.cinema.hallName}
                        </span>
                        <span className="text-sm text-gray-200">
                            <span className="font-semibold text-secondary-600">
                                {formatStartTime(bill.show.startTime)}
                            </span>{' '}
                            {bill.show.startDate}
                        </span>
                    </div>
                </div>
                <div className="absolute right-0 top-1/2 h-fit -translate-y-1/2 translate-x-9 rotate-90">
                    <BillDialog bill={bill} />
                </div>
            </div>
        </div>
    )
}
