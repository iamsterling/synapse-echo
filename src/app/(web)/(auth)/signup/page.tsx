"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cx } from "class-variance-authority"
import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link"
import { useActionState } from "react"
import { login } from "../action"

// import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
    const [ state, action, pending ] = useActionState(login, null)



    return <div className="grid  lg:grid-cols-2 container w-full grow border-x-2 border-border/50 border-dashed">
        <div className="flex flex-col w-full gap-4 p-6 md:p-10 ">

            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-xs">
                    <form className={cx("flex flex-col gap-6" )}>
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h1 className="text-2xl font-bold">Signup for a new account</h1>
                        </div>


                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label className={cx("text-neutral-600")} htmlFor="email">Email</Label>
                                <Input name="email" id="email" type="email" placeholder="m@example.com" required />
                            </div>
                            <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label className={cx("text-neutral-600")} htmlFor="password">Password</Label>
                                
                            </div>
                            <Input id="password" type="password" required />
                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                            </div>
                        </div>

                        <div className="text-center text-sm text-neutral-700">
                            Arleady have an account?{" "}
                            <Link href="/login" className="underline text-violet-500 underline-offset-6">
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
    </div>
}
