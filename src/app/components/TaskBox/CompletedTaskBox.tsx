"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Database } from '../../../../types/database.types';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type TodoTable = Database["public"]["Tables"]["todos"]["Row"];

export const CompletedTaskBox = () => {
  const [tasks, setTasks] = useState<TodoTable[]>([]);
  const [isFetched, setIsFetched] = useState(false)
  const supabase = createClientComponentClient<Database>()

  const Delete = async (id: number) => {
    let { data, error} = await supabase.from('todos').update({isDeleted: true}).eq('id', id)
    if (error) {
      console.log(error)
    }
    toast.success('Task Deleted successfully')
  }

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

  return (
    <div>
        <div className='flex justify-between items-center m-10 text-[#735D78]'>
        <h1 className='text-xl font-bold'>All Tasks</h1> 
      </div>
      <div className='grid gap-5 mb-10'>
        {tasks.filter((task) => task.isDeleted === false).length === 0 && <h1 className='text-4xl text-[#735D78] m-10'>No Tasks</h1>}
        {tasks.filter((task) => task.isDeleted === false).map((task) => (
            <div key={task.id} className={`flex items-center justify-between m-10 text-[#735D78]`}>
              <h1 className='text-4xl'>Title: {task.title}</h1>
              <div className='flex items-center justify-center gap-10'>
                <div className='grid items-center gap-5'>
                  <p className='text-4xl'>Description: {task.description}</p>
                  <p className='text-4xl'>End Date: {task.dateOfTermination}</p>
                </div>
                <button className="btn btn-circle btn-ghost bg-[#735D78]" onClick={() => Delete(task.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F7D1CD" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}
