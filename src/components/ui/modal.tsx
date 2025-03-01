'use client'

import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogOverlay } from './dialog'

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const handleOpenChange = () => router.back()

    return (
        <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
            <DialogOverlay />
            <DialogContent className="border-none bg-secondary-900">
                {children}
            </DialogContent>
        </Dialog>
    )
}
