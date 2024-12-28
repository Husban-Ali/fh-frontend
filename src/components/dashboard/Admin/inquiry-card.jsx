
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
// import { format } from 'date-fns'
import logo from "/logo-new.png"

export function InquiryCard({
  username,
  message,
  email
}
) {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="flex items-start space-x-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={logo} />
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">{username}</h3>
              <p className="text-xs text-gray-500">
                unknown
              </p>
            </div>
            <p className="text-xs text-gray-500">{email}</p>
            <p className="text-sm text-gray-700 mt-2">{message}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <button className="text-xs text-blue-600 hover:text-blue-800 transition-colors">
          Reply
        </button>
        <button className="text-xs text-gray-600 hover:text-gray-800 transition-colors">
          Archive
        </button>
      </CardFooter>
    </Card>
  );
}
