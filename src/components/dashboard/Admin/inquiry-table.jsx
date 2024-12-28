import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "../../../axios"; // Import the axios instance
import { InquiryCard } from "./inquiry-card"; // Import InquiryCard component

export function InquiryTable() {
  const [inquiries, setInquiries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Fetch all inquiries/tickets when component mounts
  useEffect(() => {
    async function fetchTickets() {
      try {
        const response = await axios.get("auth/admin/tickets");
        setInquiries(response.data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    }

    fetchTickets();
  }, []);

  // Handle ticket delete from the parent
  const handleTicketDelete = (ticketId) => {
    setInquiries((prevInquiries) =>
      prevInquiries.filter((inquiry) => inquiry._id !== ticketId)
    );
  };

  // Pagination logic
  const totalPages = Math.ceil(inquiries.length / itemsPerPage);
  const paginatedInquiries = inquiries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full h-1/3 max-w-4xl mx-auto space-y-4">
      <Table className="border-separate border-spacing-2">
        <TableHeader>
          <TableRow>
            <TableHead>Inquiry Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedInquiries.map((inquiry) => (
            <TableRow key={inquiry._id}>
              <TableCell>
                <InquiryCard
                  inquiry={inquiry}
                  onDelete={handleTicketDelete} // Pass delete handler to InquiryCard
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center mt-4">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
