'use client'
import { changePasswordAction } from '@/actions/common'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { changePasswordSchema } from '@/lib/validations/common'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useRef } from 'react'
import { useFormState } from 'react-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function PasswordChangeForm() {
    const [state, action] = useFormState(changePasswordAction, undefined)
    const form = useForm<z.infer<typeof changePasswordSchema>>({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
    })
    const formRef = useRef<HTMLFormElement>(null)
    return (
        <Form {...form}>
            <form
                ref={formRef}
                action={action}
                onSubmit={(evt) => {
                    evt.preventDefault()
                    form.handleSubmit(() => {
                        action(new FormData(formRef.current!))
                    })(evt)
                }}
                className="flex max-w-[700px] flex-col gap-2"
            >
                <FormField
                    control={form.control}
                    name="oldPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Old Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>New Password</FormLabel>
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
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {state?.message}
                <div className="flex">
                    <Button className="ml-auto px-3" type="submit">
                        Change Password
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default PasswordChangeForm
