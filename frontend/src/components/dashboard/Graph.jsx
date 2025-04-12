"use client"
import { 
  LineChart, 
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer 
} from "recharts"

export function SavingsChart() {
  const data = [
    {
      month: "Jan",
      savings: 2400,
    },
    {
      month: "Feb",
      savings: 2800,
    },
    {
      month: "Mar",
      savings: 3200,
    },
    {
      month: "Apr",
      savings: 3600,
    },
    {
      month: "May",
      savings: 4200,
    },
    {
      month: "Jun",
      savings: 4935,
    },
  ];

  if (!data || data.length === 0) {
    // Handle empty or undefined data case
    return <div>No data available</div>;
  }

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip 
            formatter={(value) => [`$${value}`, "Savings"]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="savings"
            stroke="#3b82f6"
            activeDot={{ r: 8 }}
            name="Savings"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}