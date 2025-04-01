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
    
    if (error) { return { ok: false, error } }
    return { ok: true, data }
}

export const logout = async () => {

    console.log("LOGGED OUT")

    return {
        ok: true
    }
}


export const signup = async (prev: any, form: FormData) => {
    const { data, error } = await supabase.auth.signUp({
        email: `${form.get("email")}`,
        password: `${form.get("password")}`,
    })
    return { data, error }
}