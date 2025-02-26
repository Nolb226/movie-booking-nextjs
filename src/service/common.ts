import { ENDPOINTS } from '@/constants/endpoint'
import { post, postPublic } from '@/lib/api'
import { LoginRespond } from '@/model/common'

export const login = async (payload: { email: string; password: string }) => {
    return postPublic<LoginRespond>(ENDPOINTS.AUTH.LOGIN, { body: payload })
}

export const changePassword = async (payload: {
    oldPassword: string
    newPassword: string
    confirmPassword: string
}) => {
    return post<LoginRespond>(ENDPOINTS.AUTH.CHANGE_PASSWORD, { body: payload })
}
