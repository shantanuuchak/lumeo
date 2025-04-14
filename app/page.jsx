"use client";

import RegisterForm from "@/components/RegisterForm";

export default function Home() {
  return (
    <div className="min-h-[85vh] container mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center">
        <h1 className="text-3xl md:text-5xl font-light tracking-wide">
          Lumeo &mdash; Create Engaging Thumbnails Using GenAI
        </h1>
      </div>

      {/* Form */}
      <div className="flex md:items-center items-start justify-center">
        <RegisterForm />
      </div>
    </div>
  );
}
