"use client";

import { useFormState, useFormStatus } from "react-dom";
import { register } from "@/actions/userController";

export default function Home() {
  const [formState, formAction] = useFormState(register, {});

  return (
    <div className="min-h-[90vh] container mx-auto grid grid-cols-1 md:grid-cols-2 px-3 ">
      <div className="flex items-center">
        <h1 className="text-3xl md:text-5xl font-light tracking-wide">
          Lumeo &mdash; Sign In to Create Thumbnails Using GenAI
        </h1>
      </div>

      {/* Form */}
      <div className="flex items-center ">
        <form
          action={formAction}
          method="POST"
          className="w-full flex flex-col items-start"
        >
          <input
            type="text"
            placeholder="Username"
            className="input"
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="input"
            required
          />
          <br />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
