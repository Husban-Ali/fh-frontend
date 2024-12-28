import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import logo from "/logo-new.png"
const CustomerCard = ({email,orderCount}) => {
    
  return (
    <Card className="w-[300px]  max-w-sm my-4 mx-4">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={logo}  />
        </Avatar>
        <div className="flex flex-col break-words text-sm">
          <CardTitle >{email}</CardTitle>
          <p className="text-sm text-muted-foreground">Customer</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Total Orders</p>
          <span className="text-2xl font-bold">{orderCount}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomerCard;