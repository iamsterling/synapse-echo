"use client"


import { forwardRef, HTMLAttributes } from "react"
import { cx } from "class-variance-authority"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { DrawerContent, DrawerHeader, DrawerFooter, DrawerClose } from "@/components/ui/drawer"
import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AreaChart, CartesianGrid, XAxis } from "recharts"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
}


export const AnalyticsDrawer = forwardRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement> (
    () => {


        return <DrawerContent className={cx("self-center place-self-center w-full")}>
            <DrawerHeader className={cx("container items-center bg-cyan-500")}>
                {/* <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription> */}

            <Card>
                <CardHeader>
                    <CardTitle>Area Chart</CardTitle>
                    <CardDescription>
                        Showing total visitors for the last 6 months
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    
                    <ChartContainer config={chartConfig}>
                        <AreaChart
                            accessibilityLayer
                            data={chartData}
                            // margin={{
                            //     left: 12,
                            //     right: 12,
                            // }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            {/* 
                            <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                            />
                            <Area
                            dataKey="desktop"
                            type="natural"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                            />
                        */}
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
                <CardFooter>
                    <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                        January - June 2024
                        </div>
                    </div>
                    </div>
                </CardFooter> 
                </Card>
            </DrawerHeader>
            <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    }
)