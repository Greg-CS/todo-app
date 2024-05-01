"use client";

import { Database } from "../../../../types/database.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@supabase/auth-helpers-nextjs";
// import { ResetPassModal } from "../Modals/ResetPassModal";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { redirect } from "next/navigation";

interface Props {
  user: User | null;
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

export const LoginForm = ({ user, isActive, setIsActive }: Props) => {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);

  /**
   * Step 1: Send the user an email to get a password reset token.
   * This email contains a link which sends the user back to your application.
   */

  const forgotPassword = async (formData: FormData) => {
    console.log("forgot password");
    const email = formData.get("email") as string;
    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    // return toast.success("Check email to continue password reset process");
  };

  /**
   * Step 2: Once the user is redirected back to your application,
   * ask the user to reset their password.
   */

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == "PASSWORD_RECOVERY") {
        setIsModalActive(true);
        if (password) {
          const { data, error } = await supabase.auth.updateUser({
            password: password,
          });

          if (data) alert("Password updated successfully!");
          if (error) alert("There was an error updating your password.");
        }
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      router.push("/account");
    }
  }, [user]);

  return (
    <form
      className="grid items-center justify-center gap-4 bg-[#B392AC] p-10 rounded-2xl mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
      style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
      action="/auth/login"
      aria-label="login-form"
      method="post"
    >
      <h1 className="text-center text-4xl font-semibold text-[#F7D1CD] pb-5">Welcome back</h1>

      {/* Input fields: email & password  */}
      <div className="flex flex-col gap-10 pb-10">
        <div className="flex items-center">
          <input
            className="bg-[#D1B3C4] border-2 rounded-lg p-2 w-96 input-ghost input placeholder:text-[#B392AC] focus:bg-[#F7D1CD] transition-all"
            name="email"
            type="email"
            value={email}
            placeholder="you@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            id="email"
          />
        </div>

        <div className="flex items-center">
          <input
            className="bg-[#D1B3C4] border-2 rounded-lg p-2 w-96 input-ghost input placeholder:text-[#B392AC] focus:bg-[#F7D1CD] transition-all"
            name="password"
            type="password"
            value={password}
            placeholder="••••••••"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            id="password"
          />
        </div>
      </div>

      {/* Remember ME and Forgot Password */}
      <div className="flex items-center justify-between gap-1">
        {/* <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-xs text-gray-900 "
          >
            Remember me
          </label>
        </div> */}
        <div className="text-xs">
          <button
            formAction={forgotPassword}
            className="font-medium text-[#F7D1CD] hover:text-[#D1B3C4] hover:underline"
          >
            Forgot your password?
          </button>
        </div>
      </div>

      {/* Sign in & sign up button */}
      <div className="flex flex-col gap-2">
        <button className="bg-[#F7D1CD] hover:bg-[#E8C2CA] text-white rounded-full px-4 py-2  text-foreground">
          Login
        </button>
      </div>

      <div className="flex items-center gap-2">
          <label
            htmlFor="dont-have-account"
            className="ml-2 block text-xs text-[#F7D1CD]"
          >
            dont have an account?
          </label>
        <button
          onClick={() => setIsActive(!isActive)}
          className="link link-hover text-xs underline text-[#735D78] hover:text-[#D1B3C4] hover:underline"
        >
          Sign up
        </button>
      </div>

      {/* <div className=" grid gap-2">
        <button className="flex btn btn-circle w-96 bg-black fill-white text-white font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
            <path d="M 33.375 0 C 30.539063 0.191406 27.503906 1.878906 25.625 4.15625 C 23.980469 6.160156 22.601563 9.101563 23.125 12.15625 C 22.65625 12.011719 22.230469 11.996094 21.71875 11.8125 C 20.324219 11.316406 18.730469 10.78125 16.75 10.78125 C 12.816406 10.78125 8.789063 13.121094 6.25 17.03125 C 2.554688 22.710938 3.296875 32.707031 8.90625 41.25 C 9.894531 42.75 11.046875 44.386719 12.46875 45.6875 C 13.890625 46.988281 15.609375 47.980469 17.625 48 C 19.347656 48.019531 20.546875 47.445313 21.625 46.96875 C 22.703125 46.492188 23.707031 46.070313 25.59375 46.0625 C 25.605469 46.0625 25.613281 46.0625 25.625 46.0625 C 27.503906 46.046875 28.476563 46.460938 29.53125 46.9375 C 30.585938 47.414063 31.773438 48.015625 33.5 48 C 35.554688 47.984375 37.300781 46.859375 38.75 45.46875 C 40.199219 44.078125 41.390625 42.371094 42.375 40.875 C 43.785156 38.726563 44.351563 37.554688 45.4375 35.15625 C 45.550781 34.90625 45.554688 34.617188 45.445313 34.363281 C 45.339844 34.109375 45.132813 33.910156 44.875 33.8125 C 41.320313 32.46875 39.292969 29.324219 39 26 C 38.707031 22.675781 40.113281 19.253906 43.65625 17.3125 C 43.917969 17.171875 44.101563 16.925781 44.164063 16.636719 C 44.222656 16.347656 44.152344 16.042969 43.96875 15.8125 C 41.425781 12.652344 37.847656 10.78125 34.34375 10.78125 C 32.109375 10.78125 30.46875 11.308594 29.125 11.8125 C 28.902344 11.898438 28.738281 11.890625 28.53125 11.96875 C 29.894531 11.25 31.097656 10.253906 32 9.09375 C 33.640625 6.988281 34.90625 3.992188 34.4375 0.84375 C 34.359375 0.328125 33.894531 -0.0390625 33.375 0 Z M 32.3125 2.375 C 32.246094 4.394531 31.554688 6.371094 30.40625 7.84375 C 29.203125 9.390625 27.179688 10.460938 25.21875 10.78125 C 25.253906 8.839844 26.019531 6.828125 27.1875 5.40625 C 28.414063 3.921875 30.445313 2.851563 32.3125 2.375 Z M 16.75 12.78125 C 18.363281 12.78125 19.65625 13.199219 21.03125 13.6875 C 22.40625 14.175781 23.855469 14.75 25.5625 14.75 C 27.230469 14.75 28.550781 14.171875 29.84375 13.6875 C 31.136719 13.203125 32.425781 12.78125 34.34375 12.78125 C 36.847656 12.78125 39.554688 14.082031 41.6875 16.34375 C 38.273438 18.753906 36.675781 22.511719 37 26.15625 C 37.324219 29.839844 39.542969 33.335938 43.1875 35.15625 C 42.398438 36.875 41.878906 38.011719 40.71875 39.78125 C 39.761719 41.238281 38.625 42.832031 37.375 44.03125 C 36.125 45.230469 34.800781 45.988281 33.46875 46 C 32.183594 46.011719 31.453125 45.628906 30.34375 45.125 C 29.234375 44.621094 27.800781 44.042969 25.59375 44.0625 C 23.390625 44.074219 21.9375 44.628906 20.8125 45.125 C 19.6875 45.621094 18.949219 46.011719 17.65625 46 C 16.289063 45.988281 15.019531 45.324219 13.8125 44.21875 C 12.605469 43.113281 11.515625 41.605469 10.5625 40.15625 C 5.3125 32.15625 4.890625 22.757813 7.90625 18.125 C 10.117188 14.722656 13.628906 12.78125 16.75 12.78125 Z"></path>
            </svg>
            Log in with apple
        </button>
        <button className="flex btn btn-circle w-96 bg-transparent border-2 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Log in with google
        </button>
      </div> */}

      {/* {isModalActive && <ResetPassModal setPassword={setPassword} />}
      <ToastContainer /> */}
    </form>
  );
};
