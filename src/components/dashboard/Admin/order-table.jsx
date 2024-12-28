import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpDown, Package, Truck, ShoppingCart, Edit } from "lucide-react";
import { useGetOrdersQuery } from "@/redux/api/ApiRoutes";
import { useAuthContext } from "@/context/AuthContext";
import axiosInstance from "@/axios";
import toast from "react-hot-toast";
import { useState } from "react";

export function OrderTable() {
  const { authToken } = useAuthContext();
  const [editingOrder, setEditingOrder] = useState(null);
  const { data } = useGetOrdersQuery(authToken?.token || "");

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500";
      case "Shipped":
        return "bg-blue-500";
      case "Delivered":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getServiceIcon = (service) => {
    switch (service) {
      case "Standard":
        return <Truck className="h-4 w-4" />;
      case "Express":
        return <ShoppingCart className="h-4 w-4" />;
      case "Next Day":
        return <Package className="h-4 w-4" />;
      default:
        return <Truck className="h-4 w-4" />;
    }
  };

  const handleEdit = (order) => {
    setEditingOrder({ ...order });
  };

  const handleSave = async () => {
    if (editingOrder) {
      try {
        const response = await axiosInstance.put(
          "/auth/admin/update-status",
          {
            trackingNumber: editingOrder.trackingNumber,
            status: editingOrder.status,
          },
          {
            headers: {
              Authorization: `Bearer ${authToken?.token}`,
            },
          }
        );

        if (response.status == 200) {
          toast.success(response?.data?.message);
          setEditingOrder(response.data.order);
        }
      } catch (error) {
        // Handle error here
        console.error(error);
      }
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <Button variant="ghost">
                ID
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost">
                Order Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost">
                Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost">
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost">
                Service
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((order) => (
            <TableRow key={order.trackingNumber}>
              <TableCell className="font-medium">
                {order.trackingNumber}
              </TableCell>
              <TableCell>{order.shipperName}</TableCell>
              <TableCell>20-10-2024</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={`${getStatusColor(order.status)} text-white`}
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  {getServiceIcon("Express")}
                  <span className="ml-2">Express</span>
                </div>
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(order)}
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Order {order._id}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={editingOrder?.shipperName || ""}
                          onChange={(e) =>
                            setEditingOrder((prev) =>
                              prev ? { ...prev, name: e.target.value } : null
                            )
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                          Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value=""
                          onChange={(e) =>
                            setEditingOrder((prev) =>
                              prev ? { ...prev, date: e.target.value } : null
                            )
                          }
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="status" className="text-right">
                          Status
                        </Label>
                        <Select
                          value={editingOrder?.status || ""}
                          onValueChange={(value) =>
                            setEditingOrder((prev) =>
                              prev ? { ...prev, status } : null
                            )
                          }
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="Shipped">Shipped</SelectItem>
                            <SelectItem value="Delivered">Delivered</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="service" className="text-right">
                          Service
                        </Label>
                        <Select
                          value={editingOrder?.status || ""}
                          onValueChange={(value) =>
                            setEditingOrder((prev) =>
                              prev ? { ...prev, service } : null
                            )
                          }
                        >
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Standard">Standard</SelectItem>
                            <SelectItem value="Express">Express</SelectItem>
                            <SelectItem value="Next Day">Next Day</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button onClick={handleSave}>Save changes</Button>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
