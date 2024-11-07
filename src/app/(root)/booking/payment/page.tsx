import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function Page() {
    return (
        <div className="flex w-9/12 flex-col gap-5.5">
            <div className="flex flex-col gap-8 bg-white/[4%] px-8 pb-8 pt-3">
                <p className="text-xl">Khuyến mãi</p>
                <div className="flex items-center gap-5.5">
                    <p className="text-nowrap">Mã khuyến mãi</p>
                    <Input className="w-fit" />
                    <Button className="px-3" variant={'highlight'}>
                        Redeem
                    </Button>
                </div>
            </div>
            <div className="bg-white/[4%]"></div>
        </div>
    )
}

export default Page
