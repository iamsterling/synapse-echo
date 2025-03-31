import {  Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut } from "@/components/ui/menubar"
import { cx } from "class-variance-authority"

export default function EditProjectLayout({
    children
}: {
    children: any
}) {



    return <>
        <section className={cx("container self-center  p-4  md:px-0 flex justify-between items-center")}>
            <h1>TITLE</h1>
            <Menubar className={cx("justify-self-end w-fit")}>
                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                    <MenubarItem>
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </section>

        { children }
    </>
}