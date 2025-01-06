import LineComponent from "../Components/Line";
import { BarChartComponent } from "../Components/BarChart";
import { Component } from "../components/Charts";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../Components/ui/card";
import React from "react";

export const Dashboard = () => {
  const data = [
    {
      title: "Conversion Rate",
      value: "15.2%",
      change: +6,
      date: "Jan - Jun 2024",
    },
    {
      title: "Followers Growth",
      value: "10.5%",
      change: +3,
      date: "Jan - Jun 2024",
    },
    {
      title: "Sales Growth",
      value: "4.8%",
      change: -1,
      date: "Jan - Jun 2024",
    },
  ];
  return (
    <div className="min-h-screen">
          <div className="flex mt-10 px-10">
            <h1 className="text-2xl font-bold">Social Media Insights</h1>
          </div>
      <div className="card-type flex flex-col items-center justify-center mt-10 px-5">
        <header className="flex">
        </header>
        <div className="container flex items-center justify-around ">
          <div className="card flex gap-10">
            {data.map((item, idx) => (
              <Card key={idx}>
                <CardHeader className="flex w-80">
                  <div className="title flex items-center justify-between">
                    <CardTitle>{item.title}</CardTitle>
                    <p>{item.date}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className={`text-5xl ${item.change > 0 ? `text-green-500`: `text-red-500`} font-bold`}>{item.value}</div>
                    <div
                      className={`text-sm flex ${
                        item.change < 0 ? `text-red-500` : `text-green-500`
                      }`}
                    >
                      <span
                        className={`${item.change < 0 ? `hidden` : `block`}`}
                      >
                        +
                      </span>
                      {item.change}
                      <span>%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="graphs py-8 flex justify-between  px-[52px]">
        <Component />
        <BarChartComponent />
      </div>
      <div className="line px-[52px] flex items-center justify-center">
        <LineComponent />
      </div>
    </div>
  );
};