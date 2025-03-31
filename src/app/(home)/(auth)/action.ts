"use server"

import { cookies } from "next/headers"

const signup = async () => {
    console.log("signing up for service!")
}

const login = async (prev: any, form: FormData) => {
    console.log("logging into service!")

    const cookie = await cookies()
    cookie.set("auth", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyXzAwMSIsIm5hbWUiOiJBbGljZSBTbWl0aCIsImVtYWlsIjoiYWxpY2Uuc21pdGhAZXhhbXBsZS5jb20iLCJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTY5MDAwMDAwMCwiZXhwIjoxNjkwMDAzNjAwfQ.l3g0-PxCBOxFbCmSM4JYMAOSeae2lSrA4YK5uhA6gBM")


    console.log(
        "EMAIL", form.get("email")
    )

    try {

        return {
            ok: true
        }
    } catch (err) {

        console.log("ERR", err)
        return {
            ok: false,
            username: "alphonso"
        }
    }
}


const logout = async () => {
    console.log("logging out of service")
}



export {
    login, logout,
    signup
}