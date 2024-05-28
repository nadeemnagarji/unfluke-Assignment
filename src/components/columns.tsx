import { ColumnDef } from "@tanstack/react-table";

export type User = {
  rank: number;
  name: string;
  calmerRatio: string;
  overallProfit: string;
  avgDailyProfit: string;
  winPercentage: string;
  price: string;
  action: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "calmerRatio",
    header: "Calmer Ratio",
  },
  {
    accessorKey: "overallProfit",
    header: "Overall Profit",
  },
  {
    accessorKey: "avgDailyProfit",
    header: "Average Daily Profit",
  },
  {
    accessorKey: "winPercentage",
    header: "Win % (Day)",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
];
