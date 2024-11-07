'use server'

import {
    changePasswordSchema,
    loginFormSchema,
    signupFormSchema,
} from '@/lib/validations/common'
import { changePassword, login } from '@/service/common'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export type LoginFormState =
    | {
          message?: string
          fields?: {
              email: string
              password: string
          }
      }
    | undefined

export const loginAction = async (
    callbackUrl: string,
    state: LoginFormState,
    FormData: FormData
) => {
    const formData = Object.fromEntries(FormData)
    const safeParse = loginFormSchema.safeParse(formData)
    try {
        if (!safeParse.success) {
            return {
                fields: safeParse.data,
            }
        }

        const { token } = await login(safeParse.data)
        if (!token) {
            return {
                message: 'Invalid credentials',
                fields: safeParse.data,
            }
        }

        const session = cookies().set('_session', token, {
            httpOnly: true,
            secure: true,
            path: '/',
        })
    } catch (error) {
        return {
            message: 'Error occurred',
            fields: safeParse.data,
        }
    }
    redirect(callbackUrl)
}

export type SignUpFormState =
    | {
          message?: string
          fields?: {
              email: string
              password: string
              confirmPassword: string
          }
      }
    | undefined

export const signupAction = async (
    state: SignUpFormState,
    FormData: FormData
) => {
    const formData = Object.fromEntries(FormData)
    const safeParse = signupFormSchema.safeParse(formData)
    try {
        if (!safeParse.success) {
            return {
                fields: safeParse.data,
            }
        }
    } catch (error) {
        return {
            message: 'Error occurred',
            fields: safeParse.data,
        }
    }
}

export type ChangePasswordFormState =
    | {
          message?: string
          fields?: {
              oldPassword: string
              newPassword: string
              confirmPassword: string
          }
      }
    | undefined
export const changePasswordAction = async (
    state: ChangePasswordFormState,
    FormData: FormData
) => {
    const formData = Object.fromEntries(FormData)
    const safeParse = changePasswordSchema.safeParse(formData)
    try {
        if (!safeParse.success) {
            return {
                fields: safeParse.data,
            }
        }
        console.log(safeParse.data)

        const data = await changePassword(safeParse.data)
        console.log(data)
    } catch (error) {
        console.log(error)

        return {
            message: 'Error occurred',
            fields: safeParse.data,
        }
    }
}

export const logoutAction = () => {
    cookies().delete('_session')
    redirect('/')
}
