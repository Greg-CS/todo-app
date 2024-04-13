"use client"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database} from "../../../../types/supabase"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const CreateTaskBox = ({user}: {user: any}) => {
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const supabase = createClientComponentClient<Database>()
  const CreateTask = async (taskTitle: any, taskDescription: any) => { 
    const { data, error } = await supabase
      .from('todos')
      .insert([
        { user_id: user.id, title: taskTitle, description: taskDescription },
      ])
      .select()
      if (error) {
        console.log(error)
      }
      toast.success('Task added successfully')
  }
          

  return (
    <div className="bg-white border-2 rounded-2xl p-10 text-black h-[25vh]">
        <div>
        <h1 className="text-4xl">Tasks</h1>
        </div>
        <div className="flex justify-between items-center gap-5 mt-5">
        <input
            className="border-2 rounded-lg p-2 w-full"
            type="text"
            placeholder="Add a task title"
            onChange={(e) => setTaskTitle(e.target.value)}
        />
        <input
            className="border-2 rounded-lg p-2 w-full"
            type="text"
            placeholder="Add a task description"
            onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button onClick={() => CreateTask(taskTitle, taskDescription)} className="btn btn-primary">Add</button>
        </div>
        <ToastContainer />
    </div>
  )
}
