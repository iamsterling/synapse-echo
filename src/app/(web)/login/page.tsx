"use client"

import { useActionState, useEffect } from "react"
import { login } from "./action"
import { LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LOGINPage() {
    const [ state, action, pending ] = useActionState(login, null)

    useEffect(() => {
        
        
        
        if (state) {
            const { ok, data, error } = state
            if (!ok) console.log(error) 
        }
        console.log("STATE", state)

    }, [ state ])

    
    return <>
        <div>LOGIN FORM</div>
        <form action={action}>
            <input name="email" className={"m-3 ring-2 ring-green-500"} />
            <input name="password" className={"m-3 ring-2 ring-green-500"} />
            <Button type="submit" className={"bg-cyan-500 flex gap-2"}>
                { pending && <LoaderCircle /> }
                LOGIN
            </Button>
        </form>
    </>
}