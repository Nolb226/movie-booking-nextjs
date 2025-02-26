'use client'
import { useForm } from 'react-hook-form'
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
   useFormField,
} from '../../ui/form'
import { z } from 'zod'
import { loginFormSchema } from '@/lib/validations/common'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { useFormState, useFormStatus } from 'react-dom'
import { useEffect, useRef } from 'react'
import { loginAction } from '@/actions/common'
import { useSearchParams } from 'next/navigation'
import { useAuth } from '@/context/app-context'

export default function LoginForm() {
   const { mutateUserProfile } = useAuth()
   const searchParams = useSearchParams()
   const callbackUrl = searchParams.get('callbackUrl')
   const loginWithCallback = loginAction.bind(null, callbackUrl || '/')
   const [state, action] = useFormState(loginWithCallback, undefined)
   const form = useForm<z.infer<typeof loginFormSchema>>({
      resolver: zodResolver(loginFormSchema),
      defaultValues: {
         email: '',
         password: '',
         // ...(state?.fields ?? {}),
      },
   })

   useEffect(() => {
      form.reset({ ...(state?.fields ?? {}) })
   }, [state, form])

   const formRef = useRef<HTMLFormElement>(null)

   return (
      <Form {...form}>
         <form
            ref={formRef}
            action={action}
            className="flex flex-col gap-4"
            onSubmit={(evt) => {
               evt.preventDefault()
               form.handleSubmit(() => {
                  mutateUserProfile()
                  action(new FormData(formRef.current!))
               })(evt)
            }}
         >
            <FormField
               name="email"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Email</FormLabel>
                     <FormControl>
                        <Input {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormField
               name="password"
               control={form.control}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Password</FormLabel>
                     <FormControl>
                        <Input type="password" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <FormMessage>{state?.message}</FormMessage>
            <Button
               disabled={form.formState.isSubmitSuccessful}
               type="submit"
               className="w-full"
            >
               Login
            </Button>
         </form>
      </Form>
   )
}
