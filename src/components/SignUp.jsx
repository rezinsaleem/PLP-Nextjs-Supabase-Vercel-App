"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import { toast } from "react-hot-toast";
import Link from "next/link";

const formSchema = z
  .object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const { email, password } = data;

    const { error } = await supabase.auth.signUp({ email, password });

    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Check your email to confirm registration!");
      router.push("/sign-in");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10 ">
      <h1 className="text-3xl font-bold text-center mb-6 text-slate-800">
        Sign Up
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full p-3 rounded-lg border text-gray-800 border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full p-3 rounded-lg border text-gray-800 border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            className="w-full p-3 rounded-lg border text-gray-800 border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 text-white bg-violet-600 hover:bg-violet-700 rounded-lg transition disabled:opacity-70"
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      <p className="text-center mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-violet-600 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
