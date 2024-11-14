'use client'
import { useAuth } from '@/context/app-context'

export default function Page() {
   const { user } = useAuth()
   console.log(user)

   return <div></div>
}
