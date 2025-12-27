"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TableTypes } from "../dashboard/coulmn";

interface DashboardChartProps {
  data: TableTypes[];
}

export default function Chart({ data }: DashboardChartProps) {
  if (!data) return null;

  const chartData = data.map((item) => ({
    name: item.name,
    progress: item.progress,
    budget: item.budget,
  }));

  return (
    <div className="w-full h-87.5 sm:h-112.5  bg-green-50 dark:bg-gray-800 p-2 sm:p-6 rounded-lg shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <XAxis dataKey="name" fontSize={12} tick={{ fontSize: 10 }} />
          <YAxis fontSize={12} />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="progress" fill="#000" radius={[4, 4, 0, 0]} />
          <Bar dataKey="budget" fill="#7B3307" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
