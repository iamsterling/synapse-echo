import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ReactNode } from "react"
import * as Assistant from "./assistant"

export default async function UsernameLayout({
    children,
    dashboard
}: {
    children: ReactNode,
    dashboard: ReactNode
}) {

    const cookie = await cookies()

    if (!cookie.has("auth")) redirect("/login")

    return <Assistant.Provider>
        { dashboard }
    </Assistant.Provider>
}