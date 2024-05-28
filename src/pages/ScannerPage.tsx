import MainLayout from "./MainLayout";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { useState } from "react";

const stockMarketIndicators = [
  "Moving Average (MA)",
  "Exponential Moving Average (EMA)",
  "Moving Average Convergence Divergence (MACD)",
  "Relative Strength Index (RSI)",
  "Bollinger Bands",
  "Stochastic Oscillator",
  "Average Directional Index (ADX)",
  "On-Balance Volume (OBV)",
  "Fibonacci Retracement",
  "Volume Weighted Average Price (VWAP)",
  "Parabolic SAR",
  "Accumulation/Distribution Line (A/D Line)",
  "Chaikin Money Flow (CMF)",
  "Ichimoku Cloud",
  "Commodity Channel Index (CCI)",
  "Rate of Change (ROC)",
  "Pivot Points",
  "Williams %R",
  "Keltner Channel",
  "Donchian Channel",
  "Elder-Ray Index",
  "Aroon Indicator",
  "True Strength Index (TSI)",
  "Vortex Indicator",
  "Momentum Indicator",
  "Price Volume Trend (PVT)",
  "Money Flow Index (MFI)",
  "Ease of Movement (EOM)",
  "Force Index",
  "Detrended Price Oscillator (DPO)",
  "Gann Indicators",
];
const handleDesign = (e: React.MouseEvent<HTMLElement>) => {
  if (e.target instanceof HTMLElement) {
    console.log(e.target.classList);
    e.target.classList.add("bg-[#6351FD]");
    e.target.classList.add("text-white");
  }
};
export default function ScannerPage() {
  const [search, SetSearch] = useState("");
  const filteredIndicators = stockMarketIndicators.filter((item) =>
    item.includes(search)
  );
  return (
    <MainLayout>
      <div className="w-full flex flex-col  mt-10  mb-5  items-center ">
        <h3 className="md:text-4xl text-2xl font-bold m-0 pb-4 text-slate-600 dark:text-gray-200">
          Select Scanners
        </h3>
      </div>
      <div className="w-[95%]  h-full overflow-hidden ">
        <div className="w-full  items-center flex mt-5 gap-5 ">
          <div className=" flex w-1/2 gap-2 justify-center">
            <Input placeholder="Name" className="w-1/2" />
            <Button variant="fluke" size="default">
              Add
            </Button>
          </div>
          <div className=" flex w-1/2 justify-center gap-2">
            <Input placeholder="Desription" className="w-1/2 " />
            <Button variant="fluke" size="default">
              Add
            </Button>
          </div>
        </div>

        <div className="w-full  h-[400px] overflow-y-auto  overflow-hidden mt-8 flex justify-center bg-transparent flex-wrap gap-10">
          <div className="bg-white w-full md:w-[80%]  lg:w-[30%] rounded-lg">
            <div className="w-full flex gap-4 justify-center items-center px-2  pb-2 border-gray mt-4 border-b-[1px]">
              <Input
                placeholder="'Parabolic SAR ...'"
                className="  border-none focus:outline"
                value={search}
                onChange={(e) => SetSearch(e.target.value)}
              />
              <Search />
            </div>
            <div className="w-full flex gap-2 overflow-y-auto px-2 flex-wrap items-start justify-center mt-5 h-[450px] pb-3">
              {filteredIndicators.map((item) => (
                <Badge
                  className=" cursor-pointer"
                  variant="outline"
                  onClick={(e) => handleDesign(e)}
                  key={item}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="bg-white w-full md:w-[80%] lg:w-[30%] flex flex-col rounded-lg">
            <h4 className="text-xl self-start font-semibold p-2 ml-4">
              Filter
            </h4>
            <div className="w-full flex p-4">
              <Input placeholder="Equity" />
              <Input placeholder="Nifty 50" />
            </div>
            <div className="w-full p-4">
              <Input placeholder="X" />
            </div>
            <div className="w-full flex p-4 gap-8">
              <Input placeholder="Start Time" />
              <Input placeholder="End Time" />
            </div>
          </div>
          <div className="bg-white w-full md:w-[80%] lg:w-[30%] flex flex-col rounded-lg">
            <div className="w-full p-2 flex justify-center items-center flex-wrap gap-4">
              <div className=" flex flex-col gap-4 w-full">
                <h4 className="text-md self-start font-semibold px-2">
                  Math operations
                </h4>
                <div className=" w-full  px-2 flex gap-4">
                  <Button variant="outline" size="sm">
                    <span className=" font-bold text-md">+</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <span className=" font-bold text-md">-</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <span className=" font-bold text-md">*</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <span className=" font-bold text-md">/</span>
                  </Button>
                </div>
              </div>
              <div className=" flex flex-col gap-4 w-full">
                <h4 className="text-md self-start font-semibold px-2">Stock</h4>
                <div className=" w-full flex px-2 flex gap-4">
                  <Button variant="outline">
                    <p className="text-md font-bold">Number</p>
                  </Button>
                  <Button variant="outline">
                    <p className="text-md font-bold">Stock LTP</p>
                  </Button>
                </div>
              </div>
              <div className=" flex flex-col gap-4 w-full">
                <h4 className="text-md self-start font-semibold px-2">
                  Comparison/Cross
                </h4>
                <div className=" w-full  px-2 flex gap-4">
                  <Button variant="outline" size="sm">
                    <span className=" font-bold text-md">&lt;</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <span className=" font-bold text-md">&le;</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <span className=" font-bold text-md">&ge;</span>
                  </Button>
                  <Button variant="outline" size="sm">
                    <span className=" font-bold text-md">&gt;</span>
                  </Button>
                </div>
                <div className=" w-full flex flex-col justify-center gap-4 md:px-4">
                  <Button variant="outline">Cross From above to below</Button>
                  <Button variant="outline">Cross From abelow to above</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
