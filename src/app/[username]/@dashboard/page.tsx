import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cx } from "class-variance-authority";
import { ChartSpline, Circle, CircleX, Ellipsis, GitBranch, GitCommitVertical, Github, Link as LinkIcon, Pencil, SquareArrowOutUpRight, TrendingUp, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as k8s from '@kubernetes/client-node'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { AnalyticsDrawer } from "./_analytics";



const test = [
    {
        framework: "1",
        title: "lorem",
        domains: [
        {
            url: "google1.com",
            ok: true,
        },
        {
            url: "google2.com",
            ok: true,
        },
        {
            url: "google3.com",
            ok: false,
        },
        {
            url: "google4.com",
            ok: false,
        }
        ],
        commit: {
        branch: "main",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        date: "11/07/22",
        }
    },
    {
        framework: "1",
        title: "lorem",
        domains: [
        {
            url: "google1.com",
            ok: true,
        },
        {
            url: "google2.com",
            ok: true,
        },
        {
            url: "google3.com",
            ok: false,
        },
        {
            url: "google4.com",
            ok: false,
        }
        ],
        commit: {
        branch: "main",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        date: "11/07/22",
        }
    },
    {
        framework: "1",
        title: "lorem",
        domains: [
        {
            url: "google1.com",
            ok: true,
        },
        {
            url: "google2.com",
            ok: true,
        },
        {
            url: "google3.com",
            ok: false,
        },
        {
            url: "google4.com",
            ok: false,
        }
        ],
        commit: {
        branch: "main",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        date: "11/07/22",
        }
    },
    {
        framework: "1",
        title: "lorem",
        domains: [
        {
            url: "google1.com",
            ok: true,
        },
        {
            url: "google2.com",
            ok: true,
        },
        {
            url: "google3.com",
            ok: false,
        },
        {
            url: "google4.com",
            ok: false,
        }
        ],
        commit: {
        branch: "main",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        date: "11/07/22",
        }
    },
    {
        framework: "1",
        title: "lorem",
        domains: [
        {
            url: "google1.com",
            ok: true,
        },
        {
            url: "google2.com",
            ok: true,
        },
        {
            url: "google3.com",
            ok: false,
        },
        {
            url: "google4.com",
            ok: false,
        }
        ],
        commit: {
        branch: "main",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        date: "11/07/22",
        }
    },
]




export default async function Home() {
    const kc = new k8s.KubeConfig()



    // const DATA = await fetch("", {})




    return <div className={cx("container self-center")}>
        <form className={cx(" px-4 pt-4")}>
            <Input />
        </form>




        <section className={cx("flex flex-col md:flex-row md:flex-wrap gap-4")}>
        {test.map(({ framework, title, domains, commit }, id) => {
            return <ContextMenu key={`project-${id}`}>
            <ContextMenuTrigger asChild>
                <Card className={cx(
                "ring-0 border-0",
                "h-fit w-full md:w-[calc(50%-0.6rem)] lg:w-[calc(33%-0.5rem)]",
                "hover:shadow-lg ring-neutral-800 hover:ring-neutral-700",
                "transition ease-in-out duration-400",
                "bg-background",
                "rounded-none"
                )}>
                <CardTitle className={cx("px-4 flex gap-2")}>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png"/>
                        <AvatarFallback>FN</AvatarFallback>
                    </Avatar>


                    <section className={cx("grow self-center")}>
                    <h1 className={cx("")}>
                        { title }
                    </h1>
                    <Badge className={cx("text-[8px] bg-[unset] overflow-visible p-0 text-sky-500")}>
                        <div className={cx("relative inset-0 bg-cyan-500 rounded-full h-1 w-1")}>
                        <div className={cx("absolute inset-0 bg-sky-500 h-full animate-pulse scale-[1.5] rounded-full")} />
                        <div className={cx("absolute inset-0 bg-sky-500 h-full w-full rounded-full")} />
                        </div>
                        online
                    </Badge>
                    </section>


                    <section className={cx("flex items-center gap-4")}>
                        <Link href="/username/project/test">
                            <Pencil size={14} className={cx("")} />
                        </Link>
                        <Drawer>
                            <DrawerTrigger>
                                <ChartSpline size={16} className={cx("stroke-blue-500")} />
                            </DrawerTrigger>
                            <AnalyticsDrawer>

                            </AnalyticsDrawer>
                        </Drawer>


                        <DropdownMenu>
                            <DropdownMenuTrigger className={cx("")}>
                            <Ellipsis size={16} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="bottom" sideOffset={16} className={cx("bg-neutral-950/50 backdrop-blur-lg")}>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </section>
                </CardTitle>
                
                <CardContent className={cx("p-0 m-0")}>
                    <div className={cx("flex flex-row gap-2 w-full overflow-scroll px-4 no-scrollbar")}>
                    {domains.map(({ url, ok }, id) => {
                        return <Button key={`project-${title}-domain-${url}`}
                        className={cx(
                            "group", 
                            "flex gap-2 text-[10px] h-fit p-2",
                            ok ? "bg-neutral-800 hover:bg-neutral-700" : "bg-rose-500/40 hover:bg-rose-500",
                            "text-accent-foreground font-[600]",
                            "transition ease-in-out duration-400",
                        )}
                        disabled={!ok}
                        >
                        { ok ? <a href="https://google.com" className={cx("contents")}>
                            <LinkIcon size={10} />
                            { url }
                            </a>
                            : <>
                            <X className={cx("")} />
                            { url }
                            </>
                        }
                        </Button>
                    })}
                    </div>
                    
                    <section className={cx("p-4 flex flex-col gap-4")}>
                    <p>{ commit.description }</p>
                    <CardFooter className={cx("p-0 gap-2 text-xs")}>
                        <span className={cx("text-neutral-600")}>
                        { commit.date } from
                        </span>
                        <div className={cx("flex gap-1")}>
                        <Badge className={cx("flex place-content-center items-center text-xs text-violet-500 bg-violet-400/20")}>
                            <Github className={cx("fill-violet-500 stroke-violet-500")} /> /username/repo
                        </Badge>
                        <Badge className={cx("flex place-content-center items-center text-xs text-blue-500 bg-blue-500/20")}>
                            <GitBranch size={8} className={cx("self-center")} />
                            { commit.branch }
                        </Badge>
                        </div>

                    </CardFooter>
                    </section>
                </CardContent>
                </Card>
            </ContextMenuTrigger>

            <ContextMenuContent className={cx("bg-black/50 backdrop-blur-md")}>
                <ContextMenuItem>Profile</ContextMenuItem>
                <ContextMenuItem>Billing</ContextMenuItem>
                <ContextMenuItem>Team</ContextMenuItem>
                <ContextMenuItem>Subscription</ContextMenuItem>
            </ContextMenuContent>
            </ContextMenu>
        })}
        </section>
    </div>
}
