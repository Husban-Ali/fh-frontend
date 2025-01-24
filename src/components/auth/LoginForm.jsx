import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { loginSchema } from "@/schemas/loginschema";
import { useAuthContext } from "@/context/AuthContext";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginForm = () => {
  const navigate = useNavigate(); // Define navigate
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

  // const submitHandler = async (values) => {
  //   setLoading(true);

  //   const formData = {
  //     email: values.email,
  //     password: values.password,
  //   };
  //   try {
  //     const response = await axiosInstance.post(`/auth/login`, formData);

  //     if (response.status === 200) {
  //       setAuthToken(response?.data);
  //       toast.success("Login Successful");
  //       // Navigate to dashboard or another page after successful login
  //       navigate("/dashboard");
  //     }
  //   } catch (error) {
  //     console.log("Login Error", error.response.data.message);
  //     toast.error(error.response.data.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const submitHandler = async (values) => {
    setLoading(true);

    const formData = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await axiosInstance.post(`/auth/login`, formData);

      if (response.status === 200) {
        // Save the user data and token in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);

        setAuthToken(response?.data);
        toast.success("Login Successful");

        // Navigate to dashboard or another page after successful login
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(
        "Login Error",
        error.response?.data?.message || error.message
      );
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <button
        onClick={() => navigate("/")} // Navigate to the home page
        className="absolute top-4 left-4 flex items-center space-x-2 text-blue-700 hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-7 w-12" />
      </button>

      <Card className="w-[500px] shadow-md mx-auto">
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
    </>
  );
};

export default LoginForm;
