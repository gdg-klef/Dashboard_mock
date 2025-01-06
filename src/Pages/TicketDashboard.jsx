"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import "../index.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart";
import AreaChartComponent from "../components/Area_Chart";

const chartData = [
  { month: "January", Tickets: 186, mobile: 80 },
  { month: "February", Tickets: 305, mobile: 200 },
  { month: "March", Tickets: 237, mobile: 120 },
  { month: "April", Tickets: 73, mobile: 190 },
  { month: "May", Tickets: 209, mobile: 130 },
  { month: "June", Tickets: 53, mobile: 190 },
  { month: "July", Tickets: 214, mobile: 140 },
  { month: "August", Tickets: 24, mobile: 140 },
  { month: "September", Tickets: 221, mobile: 140 },
  { month: "October", Tickets: 111, mobile: 140 },
  { month: "November", Tickets: 212, mobile: 140 },
  { month: "December", Tickets: 200, mobile: 140 },
];

const chartConfig = {
  Tickets: {
    label: "Tickets",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

export function TicketDashboard() {
  return (
    <div className="sections">
      <h1 className="text-4xl font-semibold mb-6 mt-8 font-sans text-center">
        Ticket Booking Dashboard
      </h1>

      <div className="main flex gap-8 p-4">
        {/* Left Side: Bar Chart */}
        <div className="w-1/2">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>Tickets By Source</CardTitle>
              <CardDescription>January - December 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={true}
                    tickMargin={10}
                    axisLine={true}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={true}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar
                    dataKey="Tickets"
                    fill="var(--color-Tickets)"
                    radius={4}
                  />
                  {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Right Side: Cards Section */}
        <div className="w-1/2 grid grid-cols-2 gap-6 grid-rows-2 place-items-center">
          {/* Card 1 */}
          <div className="custom-card w-full border drop-shadow-lg h-36 border-solid rounded">
            <div className="card-header flex w-full items-center justify-between px-4 mt-3">
              <p>Total Tickets Booked</p>
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z"
                />
              </svg>
            </div>
            <div className="card-data flex w-full justify-between items-center px-4 mt-3">
              <p className="text-3xl font-bold">1,000</p>
              <p className="text-green-600">+5%</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="custom-card w-full border drop-shadow-lg h-36 border-solid rounded">
            <div className="card-header flex w-full items-center justify-between px-4 mt-3">
              <p>Active Users</p>
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="9" cy="6" r="4" />
                  <path strokeLinecap="round" d="M15 9a3 3 0 1 0 0-6" />
                  <ellipse cx="9" cy="17" rx="7" ry="4" />
                  <path
                    strokeLinecap="round"
                    d="M18 14c1.754.385 3 1.359 3 2.5c0 1.03-1.014 1.923-2.5 2.37"
                  />
                </g>
              </svg>
            </div>
            <div className="card-data flex w-full justify-between items-center px-4 mt-3">
              <p className="text-3xl font-bold">6000</p>
              <p className="text-green-600">+10%</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="custom-card w-full border drop-shadow-lg h-36 border-solid rounded">
            <div className="card-header flex w-full items-center justify-between px-4 mt-3">
              <p>Total Refunds</p>
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </g>
              </svg>
            </div>
            <div className="card-data flex w-full justify-between items-center px-4 mt-3">
              <p className="text-3xl font-bold">40</p>
              <p className="text-red-600">-2%</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="custom-card w-full border drop-shadow-lg h-36 border-solid rounded">
            <div className="card-header flex w-full items-center justify-between px-4 mt-3">
              <p>Total Revenue</p>

              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M21 11h-3.94a.78.78 0 0 0-.21 0h-.17a1.3 1.3 0 0 0-.15.1a1.67 1.67 0 0 0-.16.12a1 1 0 0 0-.09.13a1.32 1.32 0 0 0-.12.2l-1.6 4.41l-4.17-11.3a1 1 0 0 0-1.88 0L6.2 11H3a1 1 0 0 0 0 2h4.3a.86.86 0 0 0 .16-.1a1.67 1.67 0 0 0 .16-.12l.09-.13a1 1 0 0 0 .12-.2l1.62-4.53l4.16 11.42a1 1 0 0 0 .94.66a1 1 0 0 0 .94-.66l2.3-6.34H21a1 1 0 0 0 0-2Z"
                />
              </svg>
            </div>
            <div className="card-data flex w-full justify-between items-center px-4 mt-3">
              <p className="text-3xl font-bold">$25</p>
              <p className="text-green-600">+3%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="graph-2 mt-10 w-11/12 ml-16 mb-8">
        <AreaChartComponent />

      </div>
    </div>
  );
}

export default TicketDashboard;
