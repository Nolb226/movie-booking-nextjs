'use client'

import { Button } from '@/components/ui/button'
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import { AuthUser } from '@/context/app-context'
import { changeInformation } from '@/lib/validations/common'
import { User } from '@/model/user'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

interface InformationPageProps {
   user: AuthUser
}

export default function InformationPage({ user }: InformationPageProps) {
   const form = useForm<z.infer<typeof changeInformation>>({
      defaultValues: {
         email: user.email,
         fullName: user.fullName,
         gender: user.gender,
      },
   })

   return (
      <div className="">
         <Form {...form}>
            <form action="">
               <FormField
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                           <Input {...field} />
                        </FormControl>
                        <FormDescription>
                           This is your public display name.
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  name="fullName"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                           <Input {...field} />
                        </FormControl>
                        <FormDescription>
                           This is your public display name.
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select
                           onValueChange={field.onChange}
                           defaultValue={field.value + ''}
                        >
                           <FormControl>
                              <SelectTrigger className="bg-white text-black">
                                 <SelectValue className="bg-white text-black" />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent className="bg-white text-black">
                              <SelectItem value="1">Nam</SelectItem>
                              <SelectItem value="2">Nữ</SelectItem>
                              <SelectItem value="3">Khác</SelectItem>
                           </SelectContent>
                        </Select>
                        <FormDescription>
                           You can manage email addresses in your
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button className="w-full" type="submit">
                  Submit
               </Button>
            </form>
         </Form>
      </div>
   )
}
