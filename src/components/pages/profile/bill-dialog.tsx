import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { formatCurrency, formatStartTime, formatTime } from '@/lib/utils'
import { Bill } from '@/model/bill'

export default async function BillDialog({ bill }: { bill: Bill }) {
    return (
        <Dialog>
            <DialogTrigger>Show details</DialogTrigger>
            <DialogContent className="max-w-[320px]">
                <div className="relative">
                    <img
                        src="/images/logo.png"
                        className="absolute left-0 top-1/2 select-none mix-blend-soft-light"
                        alt=""
                    />
                    <div className="flex flex-col gap-4 divide-y divide-dashed divide-gray-200">
                        <DialogHeader className="flex flex-col items-center gap-4">
                            <div className="aspect-[2/3] max-h-[200px] overflow-hidden rounded-md shadow-md shadow-primary-600">
                                <img
                                    src={bill.movie.poster}
                                    className="h-full w-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div>
                                <DialogTitle>{bill.movie.name}</DialogTitle>
                                <DialogDescription className="text-center">
                                    {bill.show.format}
                                </DialogDescription>
                            </div>
                        </DialogHeader>
                        <div className="pt-4 text-sm">
                            <span className="font-semibold">
                                {bill.cinema.name} - {bill.cinema.hallName}
                            </span>
                            <p className="mt-1">
                                Showtimes:{' '}
                                <span className="font-semibold text-primary-300">
                                    {formatStartTime(bill.show.startTime)}
                                </span>{' '}
                                - {formatTime(bill.show.startDate)}
                            </p>
                        </div>
                        <div className="pt-4 text-sm">
                            Seats:{' '}
                            <span className="font-semibold">
                                {bill.tickets
                                    .map((ticket) => ticket.seatName)
                                    .join(', ')}
                            </span>
                        </div>
                        <DialogFooter className="gap-1 pt-4 sm:flex sm:flex-col sm:space-x-0">
                            <div className="flex justify-between text-sm text-gray-200">
                                <span>Ticket ID</span>
                                <span>Price </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-left text-sm">
                                    {bill.id}
                                </span>
                                <span className="font-semibold text-primary-300">
                                    {formatCurrency(bill.total)}
                                </span>
                            </div>
                        </DialogFooter>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
