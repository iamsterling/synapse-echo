"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cx } from "class-variance-authority"
import { GalleryVerticalEnd, LoaderCircle } from "lucide-react"
import Link from "next/link"
import { useActionState, useEffect } from "react"
import { signup } from "../action"
import { redirect } from "next/navigation"
import { Alert } from "@/components/ui/alert"
import { toast } from "sonner"

// import { LoginForm } from "@/components/login-form"

export default function SignupPage() {
    const [ state, action, pending ] = useActionState(signup, null)

    useEffect(() => {
        console.log(state)
        if (state) {
            const { ok, data, error } = state
            if (!ok) toast.error(error)
            // error && toast.error(error?.message)
            // data.user && redirect("/login")
        }
    }, [state])

    return <>
        <div className="flex flex-col w-full gap-4 p-6 md:p-10 ">

            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-xs flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="uppercase text-3xl font-bold">Signup</h1>
                    </div>
                    <form action={action} className={cx("flex flex-col gap-6" )}>


                        <section className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input name="email" id="email" type="email" placeholder="email@address.com" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input name="password" id="password" type="password" required />
                            </div>


                            <div className={cx("flex gap-4")}>
                                <Button type="reset" className="grow text-foreground/20 bg-transparent hover:bg-transparent hover:text-foreground focus:text-foreground">
                                    Cancel
                                </Button>
                                <Button type="submit" variant="secondary" className="grow">
                                    { pending && <LoaderCircle className={cx("animate-spin")} />}
                                    Signup
                                </Button>
                            </div>
                        </section>

                        <div className="text-center text-sm text-foreground/30">
                            Already have an account?{" "}
                            <Link href="/login" className="underline underline-offset-6 text-primary">
                                Login
                            </Link>
                        </div>
                        </form>
                </div>
            </div>
        </div>

        <div className="relative hidden bg-muted lg:block">
            <img
                src="/v2.jpeg"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
        </div>
    </>
}
