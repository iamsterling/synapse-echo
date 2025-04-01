"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cx } from "class-variance-authority"
import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link"
import { useActionState, useEffect } from "react"
import { login } from "../action"
import { redirect } from "next/navigation"

// import { LoginForm } from "@/components/login-form"

export default function ForgotPasswordPage() {
    const [ state, action, pending ] = useActionState(login, null)

    // useEffect(() => {
    //     console.log(state)
    //     if (state?.ok) redirect(`/${state?.username}`)
    // }, [state])

    return <>
        <main className="flex flex-col w-full gap-4 p-6 md:p-10 ">

            <div>RESET PASSWORD??</div>
        </main>

        <aside className="relative hidden bg-muted lg:block">
            <img
                src="/v2.jpeg"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
        </aside>
    </>
}
