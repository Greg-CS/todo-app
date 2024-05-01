'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CreateTaskBox } from "../../components/CreateTaskBox/CreateTaskBox";
import { TaskBox } from "../../components/TaskBox/TaskBox";
import { Database } from "../../../../types/database.types";
import Link from "next/link";
import { CompletedTaskBox } from "../../components/TaskBox/CompletedTaskBox";
import { UpcomingTaskBox } from '../TaskBox/UpcomingTaskBox';
import { TodayTaskBox } from '../TaskBox/TodayTaskBox';

export const Dashboard = ({user}: {user: any}) => {
    
    const path = usePathname();
    
    const [allTasks, setAllTasks] = useState(true);
    const [today, setToday] = useState(false);
    const [upcoming, setUpcoming] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (path === `/account/${user.id}/all-tasks`) {
            setAllTasks(true);
            setToday(false);
            setUpcoming(false);
            setCompleted(false);
        } else if (path === `/account/${user.id}/today`) {
            setAllTasks(false);
            setToday(true);
            setUpcoming(false);
            setCompleted(false);
        } else if (path === `/account/${user.id}/upcoming`) {
            setAllTasks(false);
            setToday(false);
            setUpcoming(true);
            setCompleted(false);
        } else if (path === `/account/${user.id}/completed`) {
            setAllTasks(false);
            setToday(false);
            setUpcoming(false);
            setCompleted(true);
        } else {
            setAllTasks(true);
            setToday(false);
            setUpcoming(false);
            setCompleted(false);
        }
    }, [])


    const data = [
        {
            id: 1,
            title: "All Tasks",
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B392AC" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>,
            url: `/account/${user.id}/all-tasks`   
        },
        {
            id: 2,
            title: "Today",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B392AC" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>,
            url: `/account/${user.id}/today`
        },
        {
            id: 3,
            title: "Upcoming",
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B392AC" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>,
            url: `/account/${user.id}/upcoming`
        },
        {
            id: 4,
            title: "Completed",
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#B392AC" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>,
            url: `/account/${user.id}/completed`
        }
    ]

    return (
    <div className="flex">
        <div className="rounded-l-2xl w-2/12 p-10 border-r-2 border-[#D1B3C4] bg-[#735D78]">
            <div className="grid gap-12 items-center">
                {data.map((item) => (
                    <Link href={item.url} key={item.id} className="flex gap-3 items-center hover:bg-[#F7D1CD] hover:p-3 transition-all hover:rounded-2xl text-[#E8C2CA] hover:text-[#B392AC]">
                        {item.icon}
                        <h1 className="text-sm font-bold">{item.title}</h1>
                    </Link>
                ))}
            </div>
        </div>
        <div className="rounded-r-2xl grid w-10/12 bg-[#B392AC]">
        {allTasks && (
            <>
                <TaskBox>
                <CreateTaskBox user={user}/>
                </TaskBox>
            </>
        )}

        {today && (
            <>
                {/* <TaskBox> */}
                    <TodayTaskBox/>
                {/* </TaskBox> */}
            </>
        )}

        {upcoming && (
            <>
                {/* <TaskBox> */}
                    <UpcomingTaskBox/>
                {/* </TaskBox> */}
            </>
        )}

        {completed && (
            <>
                <CompletedTaskBox />
            </>
        )}
        </div>
    </div>
    )
}
