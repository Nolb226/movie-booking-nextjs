import { z } from 'zod'

export const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().trim().min(1, { message: 'Password is required' }),
})

export const signupFormSchema = z
    .object({
        email: z.string().email(),
        password: z
            .string()
            .trim()
            .min(12, { message: 'Mật khẩu phải có ít nhất 12 ký tự' })
            .regex(/[A-Z]/, {
                message: 'Mật khẩu phải chứa ít nhất một chữ hoa',
            })
            .regex(/[0-9]/, {
                message: 'Mật khẩu phải chứa ít nhất một chữ số',
            })
            .regex(/[@$!%*?&#]/, {
                message: 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt',
            }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.confirmPassword === data.password, {
        message: 'Passwords must match!',
        path: ['confirmPassword'],
    })

export const changePasswordSchema = z
    .object({
        oldPassword: z.string().min(1, { message: 'Không được để trống' }),
        newPassword: z
            .string()
            .trim()
            .min(12, { message: 'Mật khẩu phải có ít nhất 12 ký tự' })
            .regex(/[A-Z]/, {
                message: 'Mật khẩu phải chứa ít nhất một chữ hoa',
            })
            .regex(/[0-9]/, {
                message: 'Mật khẩu phải chứa ít nhất một chữ số',
            })
            .regex(/[@$!%*?&#]/, {
                message: 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt',
            }),
        confirmPassword: z.string().min(1, { message: 'Không được để trống' }),
    })
    .refine((data) => data.confirmPassword === data.newPassword, {
        message: 'Passwords must match!',
        path: ['confirmPassword'],
    })
