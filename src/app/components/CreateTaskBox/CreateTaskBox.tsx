"use client"

import { SetStateAction, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database} from "../../../../types/database.types"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Datepicker from "react-tailwindcss-datepicker"; 

export const CreateTaskBox = ({user}: {user: any}) => {
  const [value, setValue] = useState({ 
    startDate: null,
    endDate: null 
  }); 

  const handleValueChange = (newValue: any) => {
  console.log("newValue:", newValue); 
  setValue(newValue); 
  } 

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const supabase = createClientComponentClient<Database>()
  const CreateTask = async (taskTitle: any, taskDescription: any) => { 
    if (!taskTitle || !taskDescription) {
      toast.error('Please fill in all fields')
      return
    } else {
        const { data, error } = await supabase
          .from('todos')
          .insert([
            { user_id: user.id, title: taskTitle, description: taskDescription, isDeleted: false, isComplete: false, dateOfTermination: value.endDate},
          ])
          .select()
          if (error) {
            console.log(error)
          }
          toast.success('Task added successfully')
          setTaskTitle('')
          setTaskDescription('')
      }
    }
          

  return (
    <div className="">
        <div className="flex justify-between items-center gap-5 mt-5">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button className="btn bg-[#F7D1CD] border-0 hover:bg-[#D1B3C4] text-[#735D78] font-bold" onClick={() => (document.getElementById('my_modal_1') as HTMLDialogElement)?.showModal()}>Add Task</button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-[#E8C2CA] grid gap-10 text-[#735D78]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-2xl">
                  Whats your task?
                </span>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost hover:bg-[#D1B3C4]">✕</button>
                </form>
              </div>
              <input
                className="createTaskBox border-2 rounded-lg p-2 w-full input-ghost input placeholder:text-[#B392AC] focus:bg-[#735D78] transition-all"
                type="text"
                placeholder="Add a task title"
                onChange={(e) => setTaskTitle(e.target.value)}
                />
              <input
                className="createTaskBox border-2 rounded-lg p-2 w-full input-ghost input placeholder:text-[#B392AC] focus:bg-[#735D78] transition-all"
                type="text"
                placeholder="Add a task description"
                onChange={(e) => setTaskDescription(e.target.value)}
              />
              <Datepicker 
                asSingle={true}
                useRange={false} 
                inputClassName="createTaskBox border-2 rounded-lg p-2 w-full input-ghost input placeholder:text-[#B392AC] focus:bg-[#735D78] transition-all"
                displayFormat={"DD/MM/YYYY"} 
                popoverDirection="down" 
                value={value} 
                onChange={handleValueChange} 
              /> 
              <div className="modal-action">
                <form method="dialog">
                    <button onClick={() => CreateTask(taskTitle, taskDescription)} className="btn bg-[#F7D1CD] border-0 hover:bg-[#D1B3C4] text-[#735D78]">Add</button>
                </form>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-[#D1B3C4] border-0 hover:bg-[#F7D1CD] text-[#735D78]">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <ToastContainer />
    </div>
  )
}
