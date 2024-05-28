import Navbar from "../components/Navbar/Navbar";
import { columns, User } from "../components/columns";
import { DataTable } from "../components/data-table";
import Sidebar from "../components/Navbar/Sidebar";
import SelectForm from "../components/Select-options";
import { Button } from "../components/ui/button";
import MainLayout from "./MainLayout";

const data = [
  {
    rank: 1,
    name: "selling with re enter",
    calmerRatio: "3.96",
    overallProfit: "371856",
    avgDailyProfit: "319.54",
    winPercentage: "0.65",
    price: "-",
    action: "View",
  },
  {
    rank: 2,
    name: "strategy name",
    calmerRatio: "3.96",
    overallProfit: "371856",
    avgDailyProfit: "319.54",
    winPercentage: "0.65",
    price: "-",
    action: "View",
  },
  {
    rank: 3,
    name: "based on premium ad",
    calmerRatio: "3.96",
    overallProfit: "371856",
    avgDailyProfit: "319.54",
    winPercentage: "0.65",
    price: "-",
    action: "View",
  },
  {
    rank: 4,
    name: "strategy name",
    calmerRatio: "3.96",
    overallProfit: "371856",
    avgDailyProfit: "319.54",
    winPercentage: "0.65",
    price: "-",
    action: "View",
  },
  {
    rank: 5,
    name: "strategy name",
    calmerRatio: "3.96",
    overallProfit: "371856",
    avgDailyProfit: "319.54",
    winPercentage: "0.65",
    price: "-",
    action: "View",
  },
  {
    rank: 6,
    name: "strategy name",
    calmerRatio: "3.96",
    overallProfit: "371856",
    avgDailyProfit: "319.54",
    winPercentage: "0.65",
    price: "-",
    action: "View",
  },
  {
    rank: 7,
    name: "strategy name",
    calmerRatio: "3.96",
    overallProfit: "371856",
    avgDailyProfit: "319.54",
    winPercentage: "0.65",
    price: "-",
    action: "View",
  },
  {
    rank: 8,
    name: "strategy name",
    calmerRatio: "3.96",
    overallProfit: "371856",
    avgDailyProfit: "319.54",
    winPercentage: "0.65",
    price: "-",
    action: "View",
  },
  {
    rank: 9,
    name: "strategy name",
    calmerRatio: "3.96",
    overallProfit: "371856",
    avgDailyProfit: "319.54",
    winPercentage: "0.65",
    price: "-",
    action: "View",
  },
];

export default function LeaderBoard() {
  return (
    <MainLayout>
      <div className="w-full flex flex-col  mt-10  mb-5  items-center ">
        <div className="w-1/2 items-center justify-center flex  gap-5 ">
          <SelectForm />
          <Button variant="fluke">Basic Bactest</Button>
        </div>
      </div>
      <div className="w-[95%]  h-full overflow-hidden overflow-y-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </MainLayout>
  );
}

/*

<div className="w-full flex flex-col  mt-10  mb-5  items-center ">
          <div className="w-1/2 items-center justify-center flex  gap-5 ">
            <SelectForm />
            <Button variant="fluke">Basic Bactest</Button>
          </div>
        </div>
        <div className="w-[95%]  h-full overflow-hidden overflow-y-auto">
          <DataTable columns={columns} data={data} />
        </div>
    
*/
