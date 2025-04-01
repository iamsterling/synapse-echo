import { Input } from "@/components/ui/input";
import { cx } from "class-variance-authority";

export default function Home() {
  return <>
    <header className={cx("relative inset-0 self-center min-h-[70svh] lg:min-h-[700px] container text-center items-center place-content-center flex flex-col gap-0")}>
      <h3 className={cx("text-[2rem] text-neutral-600")}>Advertising on</h3>
      {/* <h1 className={cx("leading-24 relative bottom-4 text-[5rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-cyan-500 stroke-emerald-500")}>
        easy mode
      </h1> */}
      <h1 className={cx("flex gap-2 leading-24 relative bottom-4 text-[5rem] font-bold")}>
        
        <span className={cx("text-transparent bg-clip-text bg-gradient-to-r bg-emerald-500 stroke-emerald-500")}>
          easy
        </span>
        <span className={cx("text-transparent bg-clip-text bg-gradient-to-l bg-rose-500 to-emerald-500 stroke-emerald-500")}>
          mode
        </span>
      </h1>

      <p className={cx("max-w-sm leading-8 text-sm text-slate-600")}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio similique porro cum accusantium vitae incidunt quaerat, rem asperiores dignissimos quis explicabo, tenetur perferendis, obcaecati veritatis impedit culpa dolorem officiis mollitia?
      </p>


      <div className={cx(
        "absolute inset-0 w-full",
        "bg-radial from-slate-700/50 blur-3xl from-0% to-transparent",
        "h-[calc(100%/2)]",
        "pointer-events-none"
      )} />
    </header> 
    


    <section className={cx("h-screen bg-cyan-200")}>
      SECTION
    </section>


    <form className={cx("h-fit sticky bottom-12 ")}>

      <Input autoFocus className={cx("bg-white/40 backdrop-blur-md  rounded-full p-8")} />
    </form>
  </>
}
