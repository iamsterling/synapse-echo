"use server"

import { cookies } from "next/headers"

export const LogoutAction = async (prev: any, form: FormData) => {

    const cookie = await cookies()
    cookie.delete("auth")

    return {}
}