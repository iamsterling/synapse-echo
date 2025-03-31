import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cx } from "class-variance-authority";
import { ChartSpline, Circle, CircleX, Ellipsis, GitBranch, GitCommitVertical, Github, Link, SquareArrowOutUpRight, X } from "lucide-react";
import Image from "next/image";




const test = [
  {
    framework: "1",
    title: "lorem",
    domains: [
      {
        url: "google.com",
        ok: true,
      },
      {
        url: "google.com",
        ok: true,
      },
      {
        url: "google.com",
        ok: false,
      },
      {
        url: "google.com",
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
        url: "google.com",
        ok: true,
      },
      {
        url: "google.com",
        ok: true,
      },
      {
        url: "google.com",
        ok: false,
      },
      {
        url: "google.com",
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
        url: "google.com",
        ok: true,
      },
      {
        url: "google.com",
        ok: true,
      },
      {
        url: "google.com",
        ok: false,
      },
      {
        url: "google.com",
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
        url: "google.com",
        ok: true,
      },
      {
        url: "google.com",
        ok: true,
      },
      {
        url: "google.com",
        ok: false,
      },
      {
        url: "google.com",
        ok: false,
      }
    ],
    commit: {
      branch: "main",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      date: "11/07/22",
    }
  }
]




export default function Home() {
  return <>
    List individual services for this specific project



    <h1>Storage</h1>


    <SidebarProvider>
      <Sidebar collapsible="none">
        
      </Sidebar>
    </SidebarProvider>
  </>
}
