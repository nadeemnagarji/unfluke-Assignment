import {
  BarChart,
  BarChart3,
  CircleAlert,
  Compass,
  DollarSign,
  HandCoins,
  Layout,
  List,
  ScanSearch,
  SwitchCamera,
  Webhook,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { useParams } from "react-router-dom";

const routes = [
  {
    icon: Layout,
    label: "Leaderboard",
    href: "/Leaderboard",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/browse",
  },
  {
    icon: BarChart,
    label: "Historical Trading",
    href: "/historical-trading",
  },
  {
    icon: BarChart3,
    label: "Historical Chart",
    href: "/historical-chart",
  },
  {
    icon: ScanSearch,
    label: "Scanners",
    href: "/Scanners",
  },
  {
    icon: CircleAlert,
    label: "Alerts",
    href: "/alerts",
  },
  {
    icon: SwitchCamera,
    label: "Basic Backtest",
    href: "/basic-backtest",
  },
  {
    icon: Webhook,
    label: "Advanced Backtest",
    href: "/advanced-backtest",
  },
  {
    icon: DollarSign,
    label: "Pricing",
    href: "/pricing",
  },
  {
    icon: HandCoins,
    label: "Earning",
    href: "/earning",
  },
];

export default function SidebarRoutes() {
  return (
    <div className=" flex flex-col w-full ">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          href={route.href}
          icon={route.icon}
          label={route.label}
        />
      ))}
    </div>
  );
}
