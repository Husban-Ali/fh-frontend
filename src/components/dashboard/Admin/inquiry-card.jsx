import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, User, MessageSquare } from "lucide-react";
import axios from "../../../axios";

export function InquiryCard({ inquiry, onDelete }) {
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle ticket reply
  const handleReply = async () => {
    try {
      setLoading(true);
      await axios.post("auth/admin/tickets/reply", {
        ticketId: inquiry._id,
        reply,
      });
      alert("Reply sent successfully");
      setLoading(false);
    } catch (error) {
      console.error("Error replying to ticket:", error);
      setLoading(false);
    }
  };

  // Handle ticket deletion
  const handleDelete = async () => {
    try {
      await axios.delete(`auth/admin/tickets/${inquiry._id}`);
      onDelete(inquiry._id); // Notify the parent to update the list
      alert("Ticket deleted successfully");
    } catch (error) {
      console.error("Error deleting ticket:", error);
    }
  };

  return (
    <Card className="w-full h-full max-w-md mx-auto shadow-lg rounded-lg bg-white">
      <CardHeader className="bg-blue-600 text-white">
        <CardTitle className="text-xl font-semibold">
          {inquiry.name}'s Inquiry
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        <div className="flex items-center space-x-2">
          <Mail className="h-5 w-5 text-blue-600" />
          <span className="text-sm text-gray-800">{inquiry.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <User className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-800">
            {inquiry.name}
          </span>
        </div>
        <div className="flex items-start space-x-2">
          <MessageSquare className="h-5 w-5 text-blue-600 mt-0.5" />
          <p className="text-sm text-gray-700">{inquiry.message}</p>
        </div>

        {/* Reply Section */}
        <div>
          <textarea
            className="border rounded w-full p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Write your reply here"
          />
          <button
            onClick={handleReply}
            disabled={loading}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
          >
            {loading ? "Sending..." : "Reply"}
          </button>
        </div>

        {/* Delete Section */}
        <button
          onClick={handleDelete}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-400"
        >
          Delete Ticket
        </button>
      </CardContent>
    </Card>
  );
}
