"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const chartData = [
  { browser: "chrome", Profit: 75, fill: "var(--color-chrome)" },
  { browser: "safari", Profit: 200, fill: "var(--color-safari)" },
  { browser: "firefox", Profit: 187, fill: "var(--color-firefox)" },
  { browser: "edge", Profit: 210, fill: "var(--color-edge)" },
  { browser: "other", Profit: 290, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-2))",
  },
  chrome: {
    label: "Jan",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Feb",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Mar",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Apr",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "May",
    color: "hsl(var(--chart-5))",
  },
};

function LineComponent() {
  return (
    <Card className="w-[95%]">
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  nameKey="Profit"
                  hideLabel
                />
              }
            />
            <Line
              dataKey="Profit"
              type="natural"
              stroke="var(--color-visitors)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-visitors)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
                dataKey="browser"
                formatter={(value) =>
                  chartConfig[value]?.label
                }
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

export default LineComponent;
