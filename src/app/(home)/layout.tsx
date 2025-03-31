import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cx } from "class-variance-authority";
import { GalleryVerticalEnd, Package, User } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <>
    <section className={cx("flex items-center backdrop-blur-md place-content-center sticky inset-0 z-[1000] border-b-1 border-border bg-background/50 p-4")}>
      <div className={cx("container flex justify-between items-center")}>
        {/* <Package size={32} /> */}
        <div className={cx("flex gap-3 items-center")}>
          <Link href="/" className="flex items-center gap-2 font-medium bg-background/70 border-2 border-border p-2 rounded-md hover:bg-border/50 transition ease-in-out">
            <GalleryVerticalEnd className="size-4 stroke-neutral-600" />
          </Link>
          <p>
            Acme Inc.
          </p>
        </div>
        <nav >
          <Link href="/username">
            <User />
          </Link>
        </nav>

      </div>
    </section>
    
    <main className={cx("relative inset-0 grow flex flex-col place-content-center items-center")}>
      { children }
    </main>


    {/* <section className={cx("flex flex-col items-center min-h-[calc(100svh/4)] border-t-2 border-t-border border-dashed bg-border/30")}>
      <footer className={cx("border-x-2 border-x-border border-dashed p-4 container grow")}>
        <ul>
          <li>LINK</li>
          <li>LINK</li>
          <li>LINK</li>
          <li>LINK</li>
          <li>LINK</li>
        </ul>
      </footer>

      <section className={cx("text-xs border-t-2 border-t-border border-dashed w-full text-center p-2 flex items-center place-content-center")}>

        <div className={cx("container flex justify-between")}>
          <p>
            © All Rights Reserved
          </p>
          <div className={cx("flex gap-2 place-self-end text-[10px] items-center")}>
            built by
            <Link href="https://sterling.sh">
              <Badge className={cx("text-[10px] bg-border text-foreground font-[600]")}>
                former humans
              </Badge>
            </Link>
          </div>
        </div>
      </section>
    </section> */}



    <section className={cx("flex flex-col items-center min-h-[calc(100svh/4)] border-t-2 border-t-border border-dashed bg-border/30")}>
      <footer className={cx("border-x-0 border-x-border border-dashed p-4 px-0 container grow flex flex-col md:flex-row md:flex-wrap")}>
        
        <div className={cx("p-4 grow md:text-start text-center")}>
          BRAND
        </div>
        

        <nav>
          <div>
            <h1>SECTION</h1>

            <section>
              LINKS
            </section>
          </div>
        </nav>
      </footer>

      <section className={cx("text-xs border-t-2 border-t-border border-dashed w-full text-center p-2 flex items-center place-content-center")}>
        <div className={cx("container flex justify-between items-center")}>
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
          <div className={cx("flex gap-2 items-center text-[10px]")}>
            built by
            <Link href="https://sterling.sh">
              <Badge className={cx("text-[10px] bg-border text-foreground font-[600]")}>
                former humans
              </Badge>
            </Link>
          </div>
        </div>
      </section>
    </section>

  </>
}
