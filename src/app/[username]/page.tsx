"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { AuthAction } from "./auth.action";
import { useActionState } from "react";

export default function Home() {
  const [ state, action, pending ] = useActionState(AuthAction, null)


  return <>

    LOGO
    
    
    <form action={action}>
      <Input type="text" name="email" />
      <Input type="text" name="password" />

      <Button type="submit">
        Submit
      </Button>
    </form>

  </>
}
