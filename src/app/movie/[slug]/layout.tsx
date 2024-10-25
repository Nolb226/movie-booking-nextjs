'use client'
import DateFilter from '@/components/date-filter'

export default function Layout({
    children,
    showing,
}: {
    showing: React.ReactNode
    children: React.ReactNode
}) {
    return (
        <section className="mx-auto flex max-w-[1440px] gap-5 px-4 2xl:px-0">
            <div className="flex w-full flex-col gap-8 xl:w-9/12">
                {children}

                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-1.5">
                        <div className="size-1.5 rounded-full bg-primary-500"></div>
                        <span className="text-2xl/tight">Showing Now</span>
                    </div>

                    <div className="flex w-full flex-1 flex-shrink-0 basis-1/3 gap-4 overflow-x-scroll">
                        {showing}
                    </div>
                </div>
            </div>
            <div className="hidden w-3/12 pl-[100px] xl:block">
                <div className="mt-16">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-1.5">
                            <div className="size-1.5 rounded-full bg-primary-500"></div>
                            <span className="text-base/tight">
                                Also Showing
                            </span>
                        </div>
                        <div className="flex flex-col gap-3">{showing}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
