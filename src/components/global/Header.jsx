import React, { useEffect, useState } from "react";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { Link } from "react-router-dom";
import { Aperture } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LogOutIcon, UserIcon } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { fetchUserAttributes } from "aws-amplify/auth";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const { user, signout } = useAppContext();
  const [userDetails, setUserDetails] = useState();

/**
 * The function `getUserDetails` fetches user attributes asynchronously and sets the user details
 * accordingly, handling errors if they occur.
 */
  const getUserDetails = async () => {
    try {
      const userDetails = await fetchUserAttributes();
      setUserDetails(userDetails);
    } catch (error) {
      console.log(
        "error while fetching user details",
        error
      );
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  
  return (
    <header className=" px-4 py-3 bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Aperture className="h-6 w-6 text-gray-900 dark:text-gray-100" />
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Acme Inc
          </span>
        </Link>
        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="h-9 w-9 cursor-pointer">
              <AvatarImage src="" />
              <AvatarFallback>
                {user?.signInDetails?.loginId[0] || "U"}
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            {userDetails && (
              <div className="w-full h-max flex flex-col gap-3 text-xs px-3">
                <div className="w-full flex flex-row gap-3">
                  <p className="font-semibold">Name</p>
                  <p>{userDetails ? userDetails.name : ""}</p>
                </div>
                <div className="w-full flex flex-row gap-3">
                  <p className="font-semibold">Email</p>
                  <p>{userDetails ? userDetails.email : ""}</p>
                </div>
                <div className="w-full flex flex-row gap-3">
                  <p className="font-semibold">Birth Date</p>
                  <p>
                    {userDetails
                      ? new Date(userDetails.birthdate).toDateString()
                      : ""}
                  </p>
                </div>
                <div className="w-full flex flex-row gap-3">
                  <p className="font-semibold">Phone Number</p>
                  <p>{userDetails ? userDetails.phone_number : ""}</p>
                </div>
              </div>
            )}
            <Command>
              <CommandList>
                <CommandGroup>
                  <CommandItem onSelect={signout}>
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    Sign out
                  </CommandItem>
                  <CommandItem>
                    <UserIcon className="mr-2 h-4 w-4" />
                    Profile
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
