// import { NextResponse } from 'next/server'
// import { cookies } from "next/headers";
// import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// import { Database } from "../../../../types/supabase";
// export async function POST() {
//     const cookieStore = cookies()
//     const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore });

//     const { data, error } = await supabase
//     .from('todos')
//     .insert([
//         { title:  },
//         { some_column: 'otherValue' },
//     ])
//     .select()
          
//     if(error){
//         console.log("Error fetching posts");
//     }
//     return NextResponse.json(data)
// }