'use client'
import { ENDPOINTS } from '@/constants/endpoint'
import { getUserProfile } from '@/service/user'
import { createContext, useContext, useEffect, useState } from 'react'
import useSWR from 'swr'
type AuthContext = {
   user: AuthUser | undefined
   mutateUserProfile: VoidFunction
   isLoading: boolean
}

export type AuthUser = {
   id: string
   gender: number
   email: string
   avatar: string
   fullName: string
}

const baseContextValue = {
   user: undefined,
   mutateUserProfile: () => {},
   isLoading: true,
}

const AuthContext = createContext<AuthContext>({
   ...baseContextValue,
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
   const {
      data,
      error,
      isLoading,
      //change user data and force to mutate
      mutate: mutateUserProfile,
   } = useSWR(ENDPOINTS.AUTH.PROFILE, getUserProfile, {
      shouldRetryOnError: false,
   })
   const [user, setUser] = useState<AuthUser | undefined>(undefined)
   useEffect(() => {
      if (data) setUser(data)
   }, [data])
   return (
      <AuthContext.Provider
         value={{
            user,
            mutateUserProfile,
            isLoading,
         }}
      >
         {children}
      </AuthContext.Provider>
   )
}
