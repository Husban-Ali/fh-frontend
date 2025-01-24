import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package,
  User,
  Calendar,
  FileText,
  MapPin,
  Receipt,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";

export function OrderDetailCard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authToken } = useAuthContext();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Retrieve the user ID from localStorage
        const user = JSON.parse(localStorage.getItem("user")) || {};
        if (!user._id) {
          throw new Error("User ID not found in local storage");
        }

        const response = await fetch(
          `http://localhost:8000/api/auth/userorder?userId=${user._id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${authToken?.token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data.orders || []);
        setLoading(false);
      } catch (err) {
        console.error("Error:", err.message);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [authToken]);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {orders.length > 0 ? (
        orders.map((order) => (
          <Card
            key={order._id}
            className="w-full mx-auto min-h-[250px] transition-all duration-300 ease-in-out sm:aspect-square md:aspect-auto md:h-auto"
          >
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl md:text-2xl flex items-center gap-2">
                <Package className="h-6 w-6" />
                {order.productName || "Product Name"}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-[24px_1fr] items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <div className="text-sm">{order.consigneeName}</div>
              </div>
              <div className="grid grid-cols-[24px_1fr] items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div className="text-sm">
                  {new Date(order.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div className="grid grid-cols-[24px_1fr] items-center gap-2">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div className="text-sm">{order.trackingNumber}</div>
              </div>
              <div className="grid grid-cols-[24px_1fr] items-start gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="text-sm">{order.consigneeAddress}</div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center w-full">
              <Link to={`/dashboard/orders/${order.trackingNumber}`}>
                <Button className="w-full" variant="outline">
                  <Receipt className="mr-2 h-4 w-4" />
                  View Receipt
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))
      ) : (
        <div>No orders found</div>
      )}
    </div>
  );
}
