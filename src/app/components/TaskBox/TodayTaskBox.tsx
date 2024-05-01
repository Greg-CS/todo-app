"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Database } from '../../../../types/database.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type TodoTable = Database["public"]["Tables"]["todos"]["Row"];

export const TodayTaskBox = () => {

  const [tasks, setTasks] = useState<TodoTable[]>([]);
  const [isFetched, setIsFetched] = useState(false)
  const supabase = createClientComponentClient<Database>()
  const today = new Date();
  const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("/api/GetTodos")
      setTasks(response.data);
    };
    if (tasks.length > 0 || isFetched) {
      setIsFetched(true);
    } else {
      fetchTasks();
    }

    fetchTasks();
  }, []);

  const Completed = async (id: number) => {
    let { data, error} = await supabase.from('todos').update({isComplete: true}).eq('id', id)
    if (error) {
      console.log(error)
    }
    toast.success('Task completed successfully')
  }

  if (isFetched) {
    return <div className='text-black'>Loading...</div>;
  }

return (
    <div className='text-white'>
        <div className='flex justify-between items-center m-10 text-[#735D78]'>
            <h1 className='text-xl font-bold'>Today&apos;s Tasks</h1> 
        </div>
        <div className='grid gap-5 mb-10'>
            {tasks.filter((task) => task.dateOfTermination === currentDate).length >= 0 && <h1 className='text-4xl text-[#735D78] m-10'>No Tasks for today</h1>}
            {tasks.filter((task) => task.isComplete === false && task.dateOfTermination === currentDate).map((task) => (
                    <div key={task.id} className={`flex items-center justify-between m-10 text-[#735D78] ${task.isComplete === true ? "hidden" : ""}`}>
                        <div className='flex items-center gap-5'>
                            <input className="checkbox [--chkbg:#735D78] [--chkfg:#F7D1CD] border-2 border-[#735D78]" type="checkbox" onChange={() => Completed(task.id)} />
                            <h1 className='text-4xl'>Title: {task.title}</h1>
                        </div>
                        <div className='grid items-center gap-5'>
                            <p className='text-4xl'>Description: {task.description}</p>
                            <p className='text-4xl'>End Date: {task.dateOfTermination}</p>
                        </div>
                    </div>
            ))}
        </div>
        <ToastContainer />
    </div>
)
}
