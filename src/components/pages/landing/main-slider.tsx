import { formatDuration, formatStartTime, formatTime } from '@/lib/utils'
import { Movie } from '@/model/movie'
import { AlarmClock, PlayIcon } from 'lucide-react'
import Link from 'next/link'

export default function MainSlider({ movie }: { movie: Movie }) {
   return (
      <div className="relative h-full">
         <div
            style={{
               backgroundImage: `linear-gradient(to bottom, transparent, #030E19) ,url(${movie.horizontalPoster})`,
            }}
            className="h-[600px] w-full rounded-xl bg-contain bg-center bg-no-repeat"
         ></div>
         <div className="absolute bottom-0 left-5.5 flex gap-4">
            <img
               src={movie.poster}
               className="aspect-[220/321] max-w-[220px] rounded-lg drop-shadow"
               alt=""
            />
            <div className="self-end">
               <div className="flex gap-4">
                  <Link
                     className="size-21 flex items-center justify-center rounded-full bg-secondary-950"
                     href={`/movie/${movie.slug}`}
                  >
                     <PlayIcon className="size-9 text-secondary-800" />
                  </Link>
                  <div className="flex flex-col justify-between gap-2 py-2">
                     <p className="text-4xl font-semibold">{movie.name}</p>
                     <div className="flex gap-5.5">
                        <p className="flex items-center gap-1 text-sm">
                           <AlarmClock className="size-4 text-primary-600" />{' '}
                           <span className="text-slate-300">
                              {formatDuration(movie.runningTime)}
                           </span>
                        </p>
                        <p className="flex items-center gap-1 text-sm">
                           <AlarmClock className="size-4 text-primary-600" />{' '}
                           <span className="text-slate-300">
                              {formatTime(movie.releaseDate)}
                           </span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
