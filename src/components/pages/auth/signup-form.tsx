'use client'

import { signupFormSchema } from '@/lib/validations/common'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '../../ui/form'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { useRef } from 'react'
import { useFormState } from 'react-dom'
import { signupAction } from '@/actions/common'

export default function SignupForm() {
   const [state, formAction] = useFormState(signupAction, undefined)
   const form = useForm<z.infer<typeof signupFormSchema>>({
      resolver: zodResolver(signupFormSchema),
      defaultValues: {
         email: '',
         password: '',
         confirmPassword: '',
         ...(state?.fields ?? {}),
      },
   })

   const formRef = useRef<HTMLFormElement>(null)

   return (
      <Form {...form}>
         <form
            ref={formRef}
            action={formAction}
            className="flex flex-col gap-4"
            onSubmit={(evt) => {
               evt.preventDefault()
               form.handleSubmit(() => {
                  formAction(new FormData(formRef.current!))
               })(evt)
            }}
         >
            <FormField
               control={form.control}
               name="email"
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
               control={form.control}
               name="password"
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
            <FormField
               control={form.control}
               name="confirmPassword"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel>Confirm password</FormLabel>
                     <FormControl>
                        <Input type="password" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            {state?.message}
            <Button type="submit">Submit</Button>
         </form>
      </Form>
   )
}
