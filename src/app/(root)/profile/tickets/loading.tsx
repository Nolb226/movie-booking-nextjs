import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
    return (
        <>
            <div className="flex flex-col">
                <p className="text-xl">My tickets</p>
                <span className="text-sm text-gray-700">Recently</span>
            </div>
            <div className="mt-6 flex flex-col gap-4">
                <Skeleton className="h-24" />
                <Skeleton className="h-24" />
                <Skeleton className="h-24" />
            </div>
        </>
    )
}
