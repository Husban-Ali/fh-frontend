import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { orderSchema } from "@/schemas/orderSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import axiosInstance from "@/axios";
import { useAuthContext } from "@/context/AuthContext";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setOrderDetails } from "@/features/order/orderSlice";
export function OrdersForm() {
  const dispatch : AppDispatch = useDispatch()
  const [loading,setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      shipperName: "",
      shipperAddress: "",
      shipperEmail: "",
      shipperPhone: "",
      shipperNTN: "",
      consigneeName: "",
      consigneeAddress: "",
      consigneePhone: "",
      consigneeEmail: "",
      parcelWeight: "",
      parcelDetails: "",
    },
  });
  type FormValues = z.infer<typeof orderSchema>
  const { authToken }= useAuthContext()
 
  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    const formData  = {
      userId : authToken?.user?._id,
      ...values
    }
    console.log(formData)
    try {
      const response = await axiosInstance.post("/auth/orders", formData, {
        headers : {
          Authorization: `Bearer ${authToken?.token}`,
        }
      });
      
      if (response?.status === 201) {
        toast.success("Order Successfully placed");
        console.log(response.data)
        dispatch(setOrderDetails(response.data));
        form.reset()
      } else {
        toast.error(response.data.message || "Unexpected error occurred");
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "Network error";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return (
    
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      
      <CardHeader>
        <CardTitle>Shipping Information</CardTitle>
        <CardDescription>
          Please fill out the shipping details for your parcel.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Shipper Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="shipperName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John Doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="shipperEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" placeholder="john@example.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="shipperPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="922345678900" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="shipperNTN"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NTN</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="National Tax Number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="shipperAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Enter full address" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Consignee Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="consigneeName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Jane Smith" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="consigneeEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" placeholder="jane@example.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="consigneePhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="922345678900" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="consigneeAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Enter full address" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Parcel Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="parcelWeight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Weight (kg)</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" placeholder="0.00" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="parcelDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Details</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Provide any additional details about the parcel" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button disabled={loading} className="py-6 px-6 font-Ubuntu font-bold w-full" type="submit">
              {loading ? (
                <span className="flex w-full items-center justify-center">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                </span>
              ) : (
                "Submit Shipping Information"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
    
    
  );
}

