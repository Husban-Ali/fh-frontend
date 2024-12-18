import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import RegistrationForm from "../auth/RegistrationForm";
import { Cross2Icon } from "@radix-ui/react-icons";

export function SignupDrawer({ isOpen, toggleDrawer }) {
  return (
    <Drawer open={isOpen} onOpenChange={toggleDrawer}>
      <DrawerContent className="flex flex-col h-[90vh] max-h-screen">
        {" "}
        {/* Set max height */}
        <DrawerClose asChild>
          <Cross2Icon className="absolute top-4 right-4 w-8 h-8 cursor-pointer" />
        </DrawerClose>
        <div className="flex-grow overflow-y-auto p-4">
          {" "}
          {/* Main content area */}
          <DrawerHeader className="flex flex-col justify-center items-center">
            <DrawerTitle>
              <img src="/logo-new.png" alt="" width={100} height={100} />
            </DrawerTitle>
            <DrawerDescription>Create your account</DrawerDescription>
          </DrawerHeader>
          {/* Scrollable area for the form */}
          <div className="">
            {" "}
            {/* Allow scrolling for the form */}
            <RegistrationForm />
          </div>
          {/* You can optionally add a footer for buttons or other actions here */}
        </div>
      </DrawerContent>
      <DrawerFooter></DrawerFooter>
    </Drawer>
  );
}
