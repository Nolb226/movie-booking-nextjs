import { cn } from '@/lib/utils'
import { Star, Ticket } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

interface MovieCardProps extends React.HTMLAttributes<HTMLDivElement> {
    poster?: string
    slug?: string
    name?: string
    rating?: number
}

function MovieCard({
    poster = 'https://media.discordapp.net/attachments/1157346998136090685/1179937226986094683/VerticalPoster01.png?ex=670a66ed&is=6709156d&hm=dfe8206c5c7639b216058450eb4dbfd3c0c0044a1d1e6b599bab92b73d290471&=&format=webp&quality=lossless',
    name = 'Star Wars: Episode V - The Empire Strikes',
    slug = 'a-haunting-in-venice',
    rating = 8.3,
    className,
    ...props
}: MovieCardProps) {
    return (
        <div
            className={cn(
                'flex w-fit max-w-[228px] flex-col gap-4 rounded-[10px] bg-white/[3%] p-3 hover:bg-white/[6%]',
                className
            )}
            {...props}
        >
            <div className="max-w-[204px] overflow-hidden rounded-[5px]">
                <img
                    className="aspect-[204/321] h-full object-cover"
                    src={poster}
                    alt={slug}
                />
            </div>
            <p className="line-clamp-1 text-lg">{name}</p>
            <div className="flex items-center gap-0.5">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <p className="text-[#C3C3C3]">{rating}</p>
            </div>
            <Button hasIcon variant="secondary">
                <Ticket className="size-4" />
                Buy Ticket
            </Button>
        </div>
    )
}

export default MovieCard
