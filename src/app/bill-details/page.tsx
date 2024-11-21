import ReservationCode from '@/components/pages/bill-details/reservation-code'
import { Badge } from '@/components/ui/badge'
import { formatCurrency, formatStartTime } from '@/lib/utils'
import { getBillDetails } from '@/service/bill'
import { formatDate } from 'date-fns'
import { vi } from 'date-fns/locale/vi'
import { Check, CreditCard } from 'lucide-react'
import QRCode from './QRCode'
import { Button } from '@/components/ui/button'
import SeatDetails from '@/components/pages/bill-details/seat-details'
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion'
import { Dialog } from '@radix-ui/react-dialog'
import {
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog'

export default async function Page({
   searchParams,
}: {
   searchParams: { [key: string]: string | string[] | undefined }
}) {
   const bill = await getBillDetails(searchParams.id as string)
   console.log(bill)

   return (
      <div className="flex min-h-screen justify-center bg-gradient-radial from-primary-800 to-primary-950 px-4 py-[108px] sm:px-8">
         <div className="w-full max-w-[49.5rem] rounded-xl border border-primary-850 bg-[#00000052]">
            <div className="flex h-full flex-col rounded-xl bg-transparent p-8 pt-10 shadow-sm backdrop-blur-sm">
               {/* <div className="absolute left-0 top-0 size-10 rounded-full bg-[#00000052] backdrop-blur-sm"></div> */}
               {/* <div className=""></div> */}
               <div className="mb-2 flex flex-col gap-3">
                  <div className="flex justify-center">
                     <div className="flex size-10 items-center justify-center rounded-[40px] bg-green-100 ring-[10px] ring-inset ring-green-50">
                        <Check className="size-6 text-green-500" />
                     </div>
                  </div>
                  <div className="text-center text-xl font-semibold text-white">
                     Thanh toán thành công
                  </div>
                  <div className="mt-2 flex flex-col divide-y divide-gray-200">
                     <div className="mb-4 mt-6 flex flex-col gap-2 md:flex-row md:gap-8">
                        <div className="flex w-full flex-col items-center justify-between gap-3 md:py-2">
                           <p className="whitespace-nowrap text-sm text-gray-500">
                              Reservation Code
                           </p>
                           <ReservationCode code={bill.id} />
                        </div>
                        <div className="flex flex-col items-center justify-between gap-3 sm:hidden sm:w-1/2 sm:flex-row md:py-2">
                           <p className="whitespace-nowrap text-sm text-gray-500">
                              QRCode
                           </p>
                           <div className="">
                              <QRCode text="test" />
                           </div>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3">
                        <div>
                           <div className="mb-1 text-sm text-gray-500">
                              Book date
                           </div>
                           <div className="text-sm font-medium">
                              {formatDate(bill.createAt, 'dd/MM/yyyy', {
                                 locale: vi,
                              })}
                           </div>
                        </div>
                        <div>
                           <div className="mb-1 text-sm text-gray-500">
                              Payment method
                           </div>
                           <div className="flex items-center gap-2 text-sm font-medium">
                              <CreditCard className="size-5" />
                              <div>ATM</div>
                           </div>
                        </div>
                        <div>
                           <div className="mb-1 text-sm text-gray-500">
                              Status
                           </div>
                           <div className="flex items-center gap-2 text-sm font-medium">
                              <Badge>{bill.status.name}</Badge>
                           </div>
                        </div>
                     </div>
                     <div className="flex w-full flex-col gap-4 py-4">
                        <div className="flex w-full gap-5">
                           <div className="aspect-square size-[5.75rem] overflow-hidden rounded-lg ring-1 ring-inset ring-gray-200">
                              <img
                                 src={bill.movie.poster}
                                 className="h-full w-full object-cover"
                                 alt=""
                              />
                           </div>
                           <div className="flex flex-1 justify-between">
                              <div className="flex flex-col">
                                 <span>
                                    {bill.movie.name}
                                    <span className="text-sm text-gray-500">
                                       {' '}
                                       ({bill.show.format})
                                    </span>
                                 </span>
                                 <span className="text-sm text-gray-600">
                                    {bill.movie.subName}
                                 </span>
                              </div>
                              <div className="">
                                 <Dialog>
                                    <DialogTrigger className="hidden text-sm text-gray-600 sm:block">
                                       Show QRcode
                                    </DialogTrigger>
                                    <DialogContent>
                                       <DialogHeader>
                                          <DialogTitle>
                                             Tickets QRCode
                                          </DialogTitle>
                                          <DialogDescription>
                                             Present this to the ticket printer
                                             to print your tickets
                                          </DialogDescription>
                                       </DialogHeader>
                                       <div className="flex items-center justify-center">
                                          <QRCode text="test" />
                                       </div>
                                    </DialogContent>
                                 </Dialog>
                              </div>
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3">
                           <div>
                              <div className="mb-1 text-sm text-gray-500">
                                 Showtime
                              </div>
                              <div className="flex items-center gap-2 text-sm font-medium">
                                 <span>
                                    {formatDate(
                                       bill.show.startDate,
                                       'dd/MM/yyyy',
                                       {
                                          locale: vi,
                                       }
                                    )}
                                 </span>
                                 <span className="text-primary-300">
                                    {formatStartTime(bill.show.startTime)}
                                 </span>
                              </div>
                           </div>
                           <div>
                              <div className="mb-1 text-sm text-gray-500">
                                 Total tickets
                              </div>
                              <div className="flex items-center gap-2 text-sm font-medium">
                                 {bill.tickets.length} tickets
                              </div>
                           </div>
                           <div>
                              <div className="mb-1 text-sm text-gray-500">
                                 Cinema
                              </div>
                              <div className="flex items-center gap-2 text-sm font-medium">
                                 {bill.cinema.name}
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3">
                        {bill.tickets.map((ticket, idx) => (
                           <SeatDetails {...ticket} key={ticket.id} />
                        ))}
                     </div>
                     <div className="pb-3 pt-4">
                        <div className="flex items-center justify-between">
                           <div className="text-sm">Provisional Sum</div>
                           <div className="text-sm">
                              {formatCurrency(bill.total)}
                           </div>
                        </div>
                        <div className="flex items-center justify-between">
                           <div className="text-base font-semibold">Totals</div>
                           <div className="flex flex-wrap items-center gap-2">
                              <div className=""></div>
                              <div className="whitespace-nowrap text-lg font-semibold text-highlight-300">
                                 {formatCurrency(bill.total)}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="ml-auto mt-auto flex items-center gap-3">
                  <Button variant={'secondary'} className="px-4 py-2">
                     Chi tiết đặt chỗ
                  </Button>
                  <Button className="px-4 py-2">Quay lại trang chủ</Button>
               </div>
            </div>
         </div>
      </div>
   )
}
