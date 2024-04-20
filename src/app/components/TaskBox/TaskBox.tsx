"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Database } from '../../../../types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type TodoTable = Database["public"]["Tables"]["todos"]["Row"];

export const TaskBox = () => {

  const [tasks, setTasks] = useState<TodoTable[]>([]);
  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("/api/GetTodos")
      setTasks(response.data);
      console.log(response.data);
    };
    fetchTasks();
  }, []);

  const Completed = async (id: number) => {
    let { data, error} = await supabase.from('todos').update({isComplete: true}).eq('id', id)
    if (error) {
      console.log(error)
    }
    toast.success('Task completed successfully')
  }

  if (!tasks) {
    return <div className='text-black'>No Current Tasks</div>;
  }

  return (
    <div className='bg-white border-2 rounded-2xl p-10 text-black mt-10'>
        {tasks.filter((task) => task.isComplete === false).map((task) => (
            <div key={task.id} className={`flex items-center justify-between ${task.isComplete === true ? "hidden" : ""}`}>
            <h1 className='text-4xl'>Title: {task.title}</h1>
            <p className='text-4xl'>Description: {task.description}</p>
            <input type="checkbox" onChange={() => Completed(task.id)} />
            </div>
        ))}
        <ToastContainer />
    </div>
  )
}
