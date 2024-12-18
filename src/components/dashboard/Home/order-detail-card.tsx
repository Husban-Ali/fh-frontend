import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, User, Calendar, FileText, MapPin, Receipt } from "lucide-react";
import { Link } from "react-router-dom";

export function OrderDetailCard({
  productName = "Ladies Suits Boxes",
  consigneeName = "Syed Hamza Ali",
  date = "2023-11-02",
  orderNo = "ORD-12345",
  address = "123 Main St, Anytown, AN 12345",
  
}: {
  productName?: string
  consigneeName?: string
  date?: string
  orderNo?: string
  address?: string
  onViewReceipt?: () => void
}) {
  return (
    
    <Card className="w-full mx-auto min-h-[250px] transition-all duration-300 ease-in-out sm:aspect-square md:aspect-auto md:h-auto">
    <CardHeader>
      <CardTitle className="text-lg sm:text-xl md:text-2xl flex items-center gap-2">
        <Package className="h-6 w-6" />
        {productName}
      </CardTitle>
    </CardHeader>
    <CardContent className="grid gap-4">
      <div className="grid grid-cols-[24px_1fr] items-center gap-2">
        <User className="h-5 w-5 text-muted-foreground" />
        <div className="text-sm">{consigneeName}</div>
      </div>
      <div className="grid grid-cols-[24px_1fr] items-center gap-2">
        <Calendar className="h-5 w-5 text-muted-foreground" />
        <div className="text-sm">{new Date(date).toLocaleDateString()}</div>
      </div>
      <div className="grid grid-cols-[24px_1fr] items-center gap-2">
        <FileText className="h-5 w-5 text-muted-foreground" />
        <div className="text-sm">{orderNo}</div>
      </div>
      <div className="grid grid-cols-[24px_1fr] items-start gap-2">
        <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
        <div className="text-sm">{address}</div>
      </div>
    </CardContent>
    <CardFooter className="flex justify-center w-full">
      <Link to={`/dashboard/orders/${orderNo}`}>
      <Button      
        className="w-full"
        variant="outline"
      >
        <Receipt className="mr-2 h-4 w-4" />
        View Receipt
      </Button>
      </Link>
    </CardFooter>
  </Card>
    
  );
}
