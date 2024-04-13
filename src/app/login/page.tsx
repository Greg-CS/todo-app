import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../../types/supabase";
import { Box } from "../components/Login-Signup-Box/Box";

export default async function Page() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const {
    data: { user },
    } = await supabase.auth.getUser();

    return (
        <div>
            <Box user={user}/>
        </div>
    )
}