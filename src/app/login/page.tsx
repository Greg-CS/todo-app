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
        <div className="bg-[#E8C2CA] min-h-screen">
            <Box user={user}/>
        </div>
    )
}