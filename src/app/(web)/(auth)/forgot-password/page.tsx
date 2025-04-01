"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cx } from "class-variance-authority"
import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link"
import { useActionState } from "react"

// import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
    const [ state, action, pending ] = useActionState("", null)



    return <>
        FORGOT PASSWORD PAGE!
    </>
}
