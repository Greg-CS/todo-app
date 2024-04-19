import React from 'react'

export const Hero = () => {
  return (
    <div className='flex justify-around min-h-screen bg-gradient-to-b from-[#F7D1CD] to-[#D1B3C4] items-center'>
        <div className='hover:bg-[#D1B3C4] transition-all hover:p-10 hover:rounded-2xl hover:text-[#F7D1CD] w-[40%] text-[#735D78]'>
            <h1 className='text-7xl font-bold'>Stay on top of your tasks with our powerful todo app</h1>
            <p className='text-3xl py-5'>Organize your life, boost your productivity, and never forget a task again with our intuitive todo app.</p>
            <div className=''>
                <button className='btn mt-4 rounded-2xl bg-[#B392AC] hover:bg-[#E8C2CA] border-0 text-xl text-[#735D78] font-bold hover:shadow-lg'>Get Started</button>
            </div>
        </div>
        <div 
            className="bg-white rounded-xl w-[50%] h-[60vh] p-10 text-black font-bold" 
            style={{backgroundImage: "url(https://i0.wp.com/i.pinimg.com/originals/a1/15/16/a1151610f8498be26d6f5893837ed8c4.gif)", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
        >

        </div>
    </div>
  )
}
