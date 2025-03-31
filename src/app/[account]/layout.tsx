import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AccountSlugLayout({ dashboard }: { dashboard: ReactNode }) {

    console.log(dashboard)
    


    if (!(await isUserLoggedIn())) redirect("/login")
    
    return <div>
        { dashboard }
    </div>
}



const isUserLoggedIn = async () => {
    return (await cookies()).has("session")
}