import { CreateTaskBox } from "./components/CreateTaskBox/CreateTaskBox";
import { TaskBox } from "./components/TaskBox/TaskBox";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../types/supabase";
import Link from "next/link";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="min-h-screen p-24 bg-[#D0E3C4] grid gap-10">
      {user ? 
      <>
        <CreateTaskBox user={user}/>
        <TaskBox />
      </>
      :
      <div>
        <h1 className="text-4xl">Please login to view tasks</h1>
        <Link href={"/login"} className="btn btn-primary">Login</Link>
      </div>
      }
    </main>
  );
}
