'use client'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { Copy } from 'lucide-react'
import React from 'react'

interface ReservationCodeProps extends React.HTMLAttributes<HTMLDivElement> {
   code: string
}

function ReservationCode({ code, className, ...props }: ReservationCodeProps) {
   const { toast } = useToast()
   const handleCopy = () => {
      navigator.clipboard.writeText(code)
      toast({
         title: 'Copy successfully!',
         description: 'Reservation Code has been copied to clipboard',
      })
   }

   return (
      <div className="flex items-center gap-3">
         <div
            className={cn(
               'whitespace-nowrap rounded px-3 py-1 text-sm font-medium ring-1 ring-inset ring-secondary-200',
               className
            )}
         >
            {code}
         </div>
         <Button
            onClick={handleCopy}
            className="size-8 hover:bg-blue-100"
            variant="ghost"
            size={'icon'}
         >
            <Copy className="size-4 text-primary-600" />
         </Button>
      </div>
   )
}

export default ReservationCode
