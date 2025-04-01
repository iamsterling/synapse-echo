"use server"

import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const supabase = createClient(`${ process.env.SUPABASE_URL }`, `${ process.env.SUPABASE_KEY }`)





export const login = async (prev: any, form: FormData) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: `${form.get("email")}`,
        password: `${form.get("password")}`,
    })    
    return { data, error: error?.message }
}

export const logout = async () => {

    console.log("LOGGED OUT")

    return {
        ok: true
    }
}


export const signup = async (prev: any, form: FormData) => {
    // console.log("Signing up with", form.get("email"), form.get("password"))
    const { data, error } = await supabase.auth.signUp({
        email: `${form.get("email")}`,
        password: `${form.get("password")}`,
    })
    return { data, error: error?.message }
}