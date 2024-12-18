import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { User, MessageSquare, MailIcon, ArrowRightIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ticketSchema } from "@/schemas/ticketSchema";
import axiosInstance from "@/axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
// Define your Zod schema

export const Form = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ticketSchema),
  });

  // Form submit handler
  const onSubmit = async (data) => {
    setLoading(true);
    const response = await axiosInstance.post("/auth/ticket", data);
    try {
      if (response.status == 201) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
      <div className="relative flex items-center">
        <Input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name")}
          className="pl-4 pr-12 py-3 w-full border-2 border-gray-200 rounded-lg focus:border-primary transition-colors duration-300"
        />
        <User size={20} className="absolute right-4 text-gray-400" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
          className="pl-4 pr-12 py-3 w-full border-2 border-gray-200 rounded-lg focus:border-primary transition-colors duration-300"
        />
        <MailIcon size={20} className="absolute right-4 text-gray-400" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="relative flex items-center">
        <Textarea
          id="message"
          placeholder="Enter Message"
          {...register("message")}
          className="pl-4 pr-12 py-3 w-full border-2 border-gray-200 rounded-lg focus:border-primary transition-colors duration-300 min-h-[150px] resize-none"
        />
        <MessageSquare
          size={20}
          className="absolute right-4 top-4 text-gray-400"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full flex items-center justify-center gap-x-2 bg-primary hover:bg-secondary py-3 rounded-lg transition-colors duration-300"
      >
        {loading ? (
          <span className="flex w-full items-center justify-center">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          </span>
        ) : (
          "Sent"
        )}
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};
