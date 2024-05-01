import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../../types/database.types";
import { Box } from "../components/Login-Signup-Box/Box";

export default async function Page() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const {
    data: { user },
    } = await supabase.auth.getUser();

    return (
        <div className="bg-gradient-to-b from-[#F7D1CD] to-[#B392AC] min-h-screen flex items-center justify-center">
            <Box user={user}/>
        </div>
    )
}