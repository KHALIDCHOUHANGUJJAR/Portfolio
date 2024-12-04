"use client";

import React from "react";
import Home from "../home/page";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const Contact = ({ isdisplay }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <Home isdisplay={isdisplay} />
      <div className="p-[50px] max-w-xl mx-auto">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-lg font-medium">
              First Name
            </label>
            <input
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              className="w-full p-2 border  bg-[#000319] border-gray-300 rounded-md"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-2 border  bg-[#000319] border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              className="w-full p-2 border border-gray-300 rounded-md bg-[#000319]"
              rows="5"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <div className="flex items-center ">
            <Button>send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
