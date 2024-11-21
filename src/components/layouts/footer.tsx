import { FacebookIcon, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
   return (
      <footer className="bg-black py-7.5 text-white">
         <div className="mx-auto flex max-w-[1440px] flex-col gap-5">
            <div className="flex items-center justify-between py-1.5">
               <div className="w-[200px]">
                  <img
                     className="h-full w-full"
                     src="/images/logo.png"
                     alt=""
                  />
               </div>
               <div className="flex gap-3.75">
                  <Link
                     href={'/'}
                     className="flex size-[41px] items-center justify-center rounded-full border border-white"
                  >
                     <FacebookIcon className="size-4 fill-white" />
                  </Link>
                  <Link
                     href={'/'}
                     className="flex size-[41px] items-center justify-center rounded-full border border-white"
                  >
                     <Twitter className="size-4 fill-white" />
                  </Link>
                  <Link
                     href={'/'}
                     className="flex size-[41px] items-center justify-center rounded-full border border-white"
                  >
                     <Instagram className="size-4" strokeWidth={3} />
                  </Link>
               </div>
            </div>
            <div className="flex justify-between">
               <div className="text-sm">
                  Copyright © 2023.All Rights Reserved By{' '}
                  <span className="text-primary-500">SguDev</span>
               </div>
               <div className="flex flex-wrap gap-10 text-white/60">
                  <Link href={'/'}>About</Link>
                  <Link href={'/'}>Term of us</Link>
                  <Link href={'/'}>Contact</Link>
                  <Link href={'/'}>Feedback</Link>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
