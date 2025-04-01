"use server"

import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const supabase = createClient(`${ process.env.SUPABASE_URL }`, `${ process.env.SUPABASE_KEY }`)


export const login = async (_: any, form: FormData) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: `${form.get("email")}`,
            password: `${form.get("password")}`,
        })

        if (error) {
            throw new Error(error.message);
        }

        return { ok: true, data };
    } catch (err: any) {
        return {
            ok: false,
            error: err.message || "Something went wrong",
        };
    }
};

export const logout = async () => {

    console.log("LOGGED OUT")

    return {
        ok: true
    }
}

export const signup = async (_: any, form: FormData) => {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: form.get("email") as string,
            password: form.get("password") as string,
        });

        if (error) {
            throw new Error(error.message);
        }

        return { ok: true, data };
    } catch (err: any) {
        return {
            ok: false,
            error: err.message || "Something went wrong",
        };
    }
};
