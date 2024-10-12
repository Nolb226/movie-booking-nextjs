'use client'
import React from 'react'

import { Input } from './ui/input'

function SearchBar() {
    return (
        <Input
            className="w-full flex-1 text-black"
            placeholder="Start searching for your movie"
        />
    )
}

export default SearchBar
