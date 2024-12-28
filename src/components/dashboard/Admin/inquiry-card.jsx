import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, User, MessageSquare } from "lucide-react";
import React from "react";
export function InquiryCard(
  { email, name, message } = {
    email: "example@email.com",
    name: "John Doe",
    message: "This is a sample inquiry message.",
  }
) {
  return (
    <Card className="w-full h-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Inquiry Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm">{email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium">{name}</span>
        </div>
        <div className="flex items-start space-x-2">
          <MessageSquare className="h-5 w-5 text-muted-foreground mt-0.5" />
          <p className="text-sm">{message}</p>
        </div>

        {/* Delete Section */}
        <button
          onClick={handleDelete}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-400"
        >
          Delete Ticket
        </button>
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
