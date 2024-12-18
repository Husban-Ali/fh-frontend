import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BarChart3,
  Box,
  HelpCircle,
  LayoutDashboard,
  Menu,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthContext } from "@/context/AuthContext";

export function AdminSidebar() {
  return (
    <div className="flex h-screen">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-64 border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <SidebarContent />
      </aside>

      {/* Collapsible sidebar for smaller screens */}
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="h-6 w-6 text-black lg:hidden absolute my-4 mx-4" />
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </div>
  );
}

function SidebarContent() {
  const {removeAuthToken} = useAuthContext()
  const handleLogout = () => {
      removeAuthToken()
  }
  return (
    <div className="flex h-full flex-col">
      <div className="flex min-h-14 items-center border-b px-4">
        <Link
          className="flex items-center gap-2 font-semibold justify-center w-full"
          to="/admin/home"
        >
          <img src="/logo-new.png" alt="" className="w-24 h-14" />
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-2">
          <Link to="/admin/dashboard">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link to="/admin/orders">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <ShoppingCart className="h-4 w-4" />
              Orders
            </Button>
          </Link>
          <Link to="/admin/inquiries">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <HelpCircle className="h-4 w-4" />
              Inquiries
            </Button>
          </Link>
          <Link to="">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Box className="h-4 w-4" />
              Products
            </Button>
          </Link>
          <Link to="">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Customers
            </Button>
          </Link>
          <Link to="">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Button>
          </Link>
        </nav>
      </ScrollArea>
      <div className="border-t p-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <button className="flex w-full" onClick={handleLogout}>
                  Logout
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </div>
  );
}
