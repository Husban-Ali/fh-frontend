import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, ShoppingCart } from "lucide-react";

export function OrderCard(
  { id, name, status, service } = {
    id: "ORD-001",
    name: "Wireless Headphones",
    status: "Pending",
    service: "Standard",
  }
) {
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

  return (
    <Card className="w-full h-12 max-w-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Order {id}</CardTitle>
        <Badge
          variant="outline"
          className={`${getStatusColor(status)} text-white`}
        >
          {status}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="flex">
          <div className="text-xl font-bold">{name}</div>
          <div className="flex items-center text-sm text-muted-foreground">
            {getServiceIcon(service)}
            <span className="ml-1">{service} Shipping</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
