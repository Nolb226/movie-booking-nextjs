'use client'
import React from 'react'

import { Input, InputProps } from './ui/input'
import { cn } from '@/lib/utils'

function SearchBar({ className, ...props }: InputProps) {
   return (
      <Input
         className={cn('w-full flex-1 text-black', className)}
         placeholder="Start searching for your movie"
         {...props}
      />
   )
}

export default SearchBar
