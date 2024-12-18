import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Loader2 } from "lucide-react";
import axiosInstance from "@/axios";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { loginSchema } from "@/schemas/loginschema";
import { useAuthContext } from "@/context/AuthContext";

const LoginForm = () => {
  const { setAuthToken } = useAuthContext();

  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = async (values) => {
    setLoading(true);

    const formData = {
      email: values.email,
      password: values.password,
    };
    try {
      const response = await axiosInstance.post(`/auth/login`, formData);

      if (response.status === 200) {
        setAuthToken(response?.data);
        toast.success("Login Successfull");
      }
    } catch (error) {
      console.log("Login Error", error.response.data.error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <Card className="w-[500px] shadow-md">
      <CardHeader className="flex justify-center items-center">
        <CardTitle className="text-2xl">
          <img src="/logo-new.png" alt="" width={200} height={200} />
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="space-y-6"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Enter password"
                          type={isShow ? "text" : "password"}
                          {...field}
                        />
                        {isShow ? (
                          <EyeOff
                            onClick={toggleShow}
                            className="absolute right-3 top-2.5 h-4 w-4 cursor-pointer text-muted-foreground"
                          />
                        ) : (
                          <Eye
                            onClick={toggleShow}
                            className="absolute right-3 top-2.5 h-4 w-4 cursor-pointer text-muted-foreground"
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center justify-center">
              <Button
                disabled={loading}
                className="py-6 px-6 font-Ubuntu font-bold w-full"
                type="submit"
              >
                {loading ? (
                  <span className="flex w-full items-center justify-center">
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  </span>
                ) : (
                  "Sign in"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
