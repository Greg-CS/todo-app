import Link from 'next/link'
import React from 'react'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "../../../../types/database.types";
import { cookies } from "next/headers";

export const Hero = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className='grid md:flex justify-items-center gap-10 md:gap-0 md:justify-around min-h-screen bg-gradient-to-b from-[#F7D1CD] to-[#D1B3C4] items-center'>
        <div className='hover:bg-[#D1B3C4] transition-all hover:p-10 hover:rounded-2xl hover:text-[#F7D1CD] w-auto p-10 md:p-0 md:w-[40%] text-[#735D78]'>
            <h1 className='text-7xl font-bold'>Stay on top of your tasks with our powerful todo app</h1>
            <p className='text-3xl py-5'>Organize your life, boost your productivity, and never forget a task again with our intuitive todo app.</p>
            <div className=''>
                <Link href={!user ? `/login` : `/account/${user.id}`} className='btn mt-4 rounded-2xl bg-[#B392AC] hover:bg-[#E8C2CA] border-0 text-xl text-[#735D78] font-bold hover:shadow-lg'>Get Started</Link>
            </div>
        </div>
        <div 
            className="bg-white md:rounded-xl w-[100%] md:w-[50%] h-[60vh] p-10 text-black font-bold" 
            style={{backgroundImage: "url(https://i.pinimg.com/originals/60/40/e3/6040e3ac4664a275635f8a2e98fffdb7.gif)", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
        >

        </div>
    </div>
  )
}
