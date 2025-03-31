import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select } from "@/components/ui/select"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { cx } from "class-variance-authority"
import { BadgeCheck, Bell, ChartLine, Check, ChevronsUpDown, CreditCard, GalleryVerticalEnd, LifeBuoy, LogOut, Package, Settings, Sparkles } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

export default function Dashboard({ 
    children 
}: {
    children: ReactNode
}) {



    return <>
        <section className={cx("sticky bg-background/60 backdrop-blur-xs inset-0 shadow-sm shadow-accent/40 flex items-center place-content-center z-[1000]")}>
            
            <div className={cx("container flex justify-between text-accent items-center gap-2 p-4")}>
                <Popover>
                    <PopoverTrigger asChild className={cx("border-0 text-foreground")}>
                        <Button
                            variant="outline"
                            role="combobox"
                            // aria-expanded={open}
                            className="w-[200px] justify-between"
                        >
                        {/* {value
                            ? frameworks.find((framework) => framework.value === value)?.label
                            : "Select framework..."} */}
                        MEOW
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent sideOffset={8} className="w-[200px] p-0 z-[10001] border-0 bg-background/80">
                        <Command className={cx("bg-none")}>
                        <CommandInput placeholder="Search framework..." />
                        <CommandList className={cx("bg-amber-500")}>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                            {/* {frameworks.map((framework) => (
                                <CommandItem
                                key={framework.value}
                                value={framework.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                                >
                                <Check
                                    className={cn(
                                    "mr-2 h-4 w-4",
                                    value === framework.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {framework.label}
                                </CommandItem>
                            ))} */}
                            </CommandGroup>
                        </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                <DropdownMenu>
                    <DropdownMenuTrigger className={cx("p-0 w-fit h-fit")}>
                        <div className={cx("flex gap-2 items-center")}>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className={cx("text-xs")}>LN</AvatarFallback>
                        </Avatar>

                        <ChevronsUpDown className="ml-auto size-4" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        
                        className="z-[10001] relative w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-md bg-background"
                        // side={isMobile ? "bottom" : "right"}
                        side="bottom"
                        align="end"
                        sideOffset={10}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback className={cx("text-xs")}>LN</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">NAME</span>
                                <span className="truncate text-xs">EMAIL</span>
                            </div>
                        </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Sparkles />
                            Upgrade to Pro
                        </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <BadgeCheck />
                            Account
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <CreditCard />
                            Billing
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Bell />
                            Notifications
                        </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                        <LogOut />
                        Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </section>

        <main className={cx("flex flex-col w-full")}>
            { children }
        </main>
    </>
}