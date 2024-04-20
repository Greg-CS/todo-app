import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-[#B392AC] grid items-center text-[#F7D1CD]'>
        <div className='md:flex grid justify-around gap-5 items-center h-[40vh]'>
            <div className='grid gap-3 items-center'>
                <label className='p-3 bg-[#F7D1CD] text-[#735D78] rounded-lg font-bold w-auto text-center md:text-left md:w-[6vw]'>
                    Contact us
                </label>
                <h1 className='text-6xl'>
                    Get in touch with us
                </h1>
                <div className='flex items-end justify-end'>
                    <button className='btn md:w-[6vw] bg-[#735D78] border-0 text-[#F7D1CD] w-auto text-center md:text-left '>
                        Contact Sales
                    </button>
                </div>
            </div>
            <div className='grid gap-3 items-center'>
                <label className='p-3 bg-[#F7D1CD] text-[#735D78] rounded-lg font-bold w-auto text-center md:text-left md:w-[6vw]'>
                    Follow us
                </label>
                <div className='flex gap-3'>
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg>
                    </button>
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                        </svg>
                    </button>
                    <button className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className='border-t-2 border-[#F7D1CD] flex justify-between p-5 font-bold'>
            <p className='text-center'>
                © 2021 Todo App. All rights reserved.
            </p>
            <div className='flex gap-3'>
                <span>
                    Privacy Policy
                </span>
                <span>
                    Terms of Service
                </span>
            </div>
        </div>
    </div>
  )
}
