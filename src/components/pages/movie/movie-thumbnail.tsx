import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface MovieThumbnailProps extends React.HTMLAttributes<HTMLDivElement> {
   poster: string
   slug: string
   horizontalPoster: string
   name: string
}

function MovieThumbnail({
   horizontalPoster,
   name,
   poster,
   slug,
   className,
   ...props
}: MovieThumbnailProps) {
   return (
      <div
         style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${horizontalPoster}')`,
         }}
         className={cn('aspect-video min-h-[150px] rounded-xl p-4', className)}
         {...props}
      >
         <div className="flex h-full items-center gap-3">
            <div className="h-full w-2/5 flex-grow-0 overflow-hidden rounded">
               <img src={poster} className="h-full w-full" alt={name} />
            </div>
            <div className="flex h-full w-3/5 flex-col justify-between">
               <span>{name}</span>
               <Button
                  asChild
                  className="px ml-auto items-center gap-1 bg-white/[14%] px-3 text-sm backdrop-blur-[2px]"
               >
                  <Link href={`/movie/${slug}`}>
                     Buy ticket{' '}
                     <ChevronRight className="size-4.5" strokeWidth={3} />
                  </Link>
               </Button>
            </div>
         </div>
      </div>
   )
}

export default MovieThumbnail
