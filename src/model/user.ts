export type User = {
    avatar: string
    id: string
    date_of_birth: Date
    gender: UserGender
    username: string
    email: string
    fullName: string
    status: boolean
    emailConfirmed: string
    phoneNumber: string
}

export type UserGender = 'Male' | 'Female' | 'Unknown'
