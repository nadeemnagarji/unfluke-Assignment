" use client";

import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bell, Star } from "lucide-react";

export default function NavbarRoutes() {
  return (
    <div className="flex gap-x-4 items-center justify-between  px-8 py-1 rounded-sm  ml-auto">
      <p className=" text-slate-500 text-sm">
        <Star />
      </p>
      <p className=" text-slate-500 text-md">
        <Bell />
      </p>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
