import { CreateTaskBox } from "../components/CreateTaskBox/CreateTaskBox";
import { TaskBox } from "../components/TaskBox/TaskBox";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../../types/supabase";

export default async function AccountPage() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return (
        <>
            <CreateTaskBox user={user}/>
            <TaskBox />
        </>
    );
    }