import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-[#B392AC] grid items-center text-[#F7D1CD] p-5'>
        <div className='border-[#F7D1CD] pt-12 md:pt-0 grid md:flex md:justify-between font-bold'>
            <p className='text-center'>
                © 2024   Todo App. All rights reserved.
            </p>
            <div className='grid md:flex gap-3 text-center'>
                <span>
                    Privacy Policy
                </span>
                <span>
                    Terms of Service
                </span>
            </div>
        </div>
    </footer>
  )
}
