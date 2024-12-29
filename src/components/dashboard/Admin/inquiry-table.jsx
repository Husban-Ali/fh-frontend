import React,{ useState } from "react";
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
import { useGetTicketsQuery } from "../../../redux/api/ApiRoutes";

export function InquiryTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const {data} = useGetTicketsQuery()
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full h-1/3 max-w-4xl mx-auto space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData?.map((inquiry) => (
            <TableRow key={inquiry.id}>
              <TableCell className="font-medium">{inquiry?.id}</TableCell>
              <TableCell>{inquiry?.name}</TableCell>
              <TableCell>{inquiry?.email}</TableCell>
              <TableCell>{inquiry?.message}</TableCell>
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
