"use server"

import { cookies } from "next/headers"

export const AuthAction = async (prev: any, form: FormData) => {
    console.log("SET AUTH")

    console.log(
        form.get("email")
    )

    const cookie = await cookies()
    cookie.set("auth", "value")

    return {}
}