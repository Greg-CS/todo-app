"use client"

import React, { useState } from 'react'
import { LoginForm } from '../Forms/LoginForm';
import { SignupForm } from '../Forms/SignUpForm';
import { User } from "@supabase/auth-helpers-nextjs";

interface Props {
  user: User | null;
}

export const Box = ({user}: Props) => {
    const [isActive, setIsActive] = useState(true);

    return (
        <div>
            {isActive ? (
                <LoginForm user={user} isActive={isActive} setIsActive={setIsActive}/>
            ) : (
                <SignupForm isActive={isActive} setIsActive={setIsActive}/>
            )}
        </div>
    )
}
