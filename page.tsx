'use client'
import React from 'react'
import { MapContainer, Popup, Marker, TileLayer } from 'react-leaflet'
import { MapPin, Share2 } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import CopyButton from '@/components/copy-button'
import { Input } from '@/components/ui/input'
import TourCard from '@/components/pages/(client)/tour/tour-card'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/map'), { ssr: false })

function Page() {
    return (
        <div className="grid h-full grid-cols-12">
            {/* Main panel */}
            <div className="col-span-4 h-full overflow-y-scroll md:h-[calc(100vh_-_80px)]">
                <div className="">
                    <div className="absolute top-[42px] flex w-full gap-1 border-light-color-scheme-gray-200 pr-4 md:top-6 md:gap-2 md:px-4"></div>
                </div>
                <div className="mt-[42px] p-4 pt-2 md:pt-4">
                    <div className="flex flex-col gap-3 md:gap-4">
                        {/* Place detail */}
                        <div className="flex flex-col gap-3 rounded-lg bg-light-color-scheme-pink-100 p-4 md:gap-4">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lg font-semibold text-light-color-scheme-gray-700">
                                    Thành phố Đà Lạt
                                </h2>
                                <div className="flex items-center gap-1">
                                    <MapPin className="size-4 text-light-color-scheme-gray-700" />
                                    <p className="text-light-color-scheme-gray-700">
                                        Tỉnh lâm đồng, Việt nam
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-sm font-semibold text-light-color-scheme-gray-800 md:text-base">
                                    Tổng quan
                                </h4>
                                <div className="text-lg md:text-sm">
                                    In the heart of a picturesque landscape lies
                                    a truly enchanting place, where the beauty
                                    of nature harmonizes with the warmth of its
                                    inhabitants. Majestic mountains frame the
                                    horizon, their peaks seemingly touching the
                                    azure sky. Lush greenery blankets the
                                    surroundings, creating a serene haven.
                                </div>
                            </div>
                            <div className="">
                                {/* <button className='p-2'></button> */}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="rounded-full bg-white p-2">
                                            <Share2 className="size-4 text-light-color-scheme-gray-600 md:size-5" />
                                        </button>
                                    </DialogTrigger>
                                    <DialogContent className="z-[99999]">
                                        <DialogHeader>
                                            <DialogTitle>
                                                Chia sẻ cho bạn bè
                                            </DialogTitle>
                                            <DialogDescription>
                                                Bấm copy để gửi link cho bạn bè
                                            </DialogDescription>
                                            <div className="flex">
                                                <Input
                                                    className="rounded-r-none focus-visible:ring-0"
                                                    readOnly
                                                    value={'test'}
                                                />
                                                <CopyButton
                                                    className="test rounded-l-none"
                                                    value="test"
                                                />
                                            </div>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-2 md:gap-3">
                            <div className="">
                                <span className="text-xl font-semibold text-light-color-scheme-gray-800">
                                    Tour được đề xuất
                                </span>
                            </div>
                            <div className="">
                                <span className=""></span>
                                <div className="flex flex-col gap-2 md:gap-3">
                                    <TourCard />
                                    <TourCard />
                                    <TourCard />
                                    <TourCard />
                                    <TourCard />
                                    <TourCard />
                                    <TourCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Map */}
            <div className="relative col-span-8">
                <Map />
            </div>
        </div>
    )
}

export default Page
