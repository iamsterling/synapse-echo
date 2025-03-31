"use client"

import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"
import { cx } from "class-variance-authority"
import React from "react"
import { createContext, forwardRef, HTMLAttributes, ReactNode } from "react"


const Context = createContext<{}>({})


interface TEST extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}
export const Provider = forwardRef<HTMLAttributes<HTMLDivElement>, TEST> (
    ({ children }, ref ) => {
        const [open, setOpen] = React.useState(false)

        React.useEffect(() => {
            const down = (e: KeyboardEvent) => {
                if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault()
                    setOpen((open) => !open)
            }
            }
            document.addEventListener("keydown", down)
            return () => document.removeEventListener("keydown", down)
        }, [])


        return <Context.Provider value={{}}>
            <CommandDialog open={open} onOpenChange={setOpen} >
                <div className={cx("")}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList className={cx("bg-[unset]")}>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>Calendar</CommandItem>
                            <CommandItem>Search Emoji</CommandItem>
                            <CommandItem>Calculator</CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>Profile</CommandItem>
                            <CommandItem>Billing</CommandItem>
                            <CommandItem>Settings</CommandItem>
                        </CommandGroup>
                    </CommandList>
                </div>
            </CommandDialog>
            { children }
        </Context.Provider>
    }
)
