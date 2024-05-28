import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

import { Button } from "../ui/button";
import Sidebar from "./Sidebar";

export default function MobileSideBar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SheetHeader>
            <Sidebar />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
