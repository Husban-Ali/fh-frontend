import { useState, KeyboardEvent, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Package, AlertCircle, Link2Icon} from "lucide-react";
import axiosInstance from "@/axios";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
// Define interfaces for the API response
interface OrderDetails {
  status: string;
  // Add other order details properties if they exist
}

interface ApiResponse {
  orderDetails: OrderDetails;
  message?: string;
}

// Define interface for error state
interface ApiError {
  response?: {
    data?: {
      message: string;
    };
  };
}

export function SearchBarComponent(): JSX.Element {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [orderFound, setOrderFound] = useState<boolean>(false);

  const handleSearch = async (): Promise<void> => {
    if (!searchInput.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get<ApiResponse>(
        `/auth/track/${searchInput.trim()}`
      );
      const filteredOrder = response.data.orderDetails;
      setSearchResult(filteredOrder);
      setOrderFound(true);
      setError(null);
    } catch (err) {
      const error = err as ApiError;
      setError(
        error.response?.data?.message ||
          "No order found with this tracking number"
      );
      setOrderFound(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 space-y-4">
      {/* Title */}
      <p
        className="py-2 font-Ubuntu text-white font-bold text-2xl md:text-3xl text-center 
        [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]"
      >
        Enter your Tracking Number
      </p>

      {/* Search Box */}
      <div className="flex w-full gap-2 Z-10">
        <div className="flex-1 relative z-10">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Enter tracking number..."
            className="pl-10 pr-4 py-2 w-full bg-white border-2 focus:border-blue-500 
              rounded-lg transition-all duration-200"
            value={searchInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <Button
          onClick={handleSearch}
          disabled={isLoading}
          className="bg-blue-600 Z-10 hover:bg-blue-700 text-white px-6 rounded-lg
            transition-colors duration-200"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Searching...
            </span>
          ) : (
            "Search"
          )}
        </Button>
      </div>

      {/* Results Display */}
      {(orderFound || error) && (
        <div className="w-full mt-4 overflow-hidden transition-all duration-300">
          {error ? (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
              <AlertCircle className="h-5 w-5" />
              <p>{error}</p>
            </div>
          ) : (
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-blue-600" />
                <div className="flex justify-between">
                  <div>
                  <p className="font-medium text-gray-900 px-2">{searchResult.trackingNumber}</p>
                  <Badge>{searchResult.status}</Badge>
                  </div>
                  <Link to='/'>
                  <div className="flex h-full ml-64 justify-center items-center">
                    <Link2Icon  />
                  </div>
                  </Link>

                </div>

              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
