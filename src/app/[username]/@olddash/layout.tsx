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
import { LogoutAction } from "./actions/logout"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

export default function Dashboard({ 
    children 
}: {
    children: ReactNode
}) {



    return <SidebarProvider>
        <Sidebar
            collapsible="none"
            className={cx("w-fit border-r-none flex flex-col gap-2 h-screen")}
        >   
            <SidebarHeader className={cx("flex flex-col items-center")}>
                <Link href="/username">
                    <Package />
                </Link>
            </SidebarHeader>
            
            <SidebarContent className={cx("flex flex-col gap-4 items-center")}>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link href="/username/usage">
                                <ChartLine />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>Usage</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <ChartLine />
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>Usage</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <ChartLine />
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>Usage</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <ChartLine />
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>Usage</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu className={cx("flex flex-col items-center")}>
                    <SidebarMenuItem>
                        <LifeBuoy />
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                            side={"right"}
                            align="end"
                            sideOffset={4}
                        >
                            <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">USERNAME</span>
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
                                <Link href="/username/settings" className={cx("contents")}>
                                    <BadgeCheck />
                                    Account
                                </Link>
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
                            <DropdownMenuItem asChild>
                                <Button onClick={async () => {
                                    "use server"
                                    const cook = await cookies()
                                    cook.delete("auth")
                                    revalidatePath("/username")
                                }}>
                                    <LogOut />
                                    Log out
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>

        <main className={cx("flex flex-col w-full")}>
            { children }
        </main>
    </SidebarProvider>
}