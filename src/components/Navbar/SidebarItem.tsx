import { NavLink, useNavigate, useParams } from "react-router-dom";
import { cn } from "../../lib/utils";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export default function SidebarItem({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) {
  const params = useParams();
  console.log(params);

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? cn(
              "flex items-center gap-x-2  text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate300/20 border-r-4 border-[#6351FD]"
            )
          : cn(
              "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate300/20"
            )
      }
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon size={22} className={cn("text-slate-500")} />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-x-sky-700 h-10 transition-all"
        )}
      />
    </NavLink>
  );
}
