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

export function SavingsSummary() {  // Note: Changed function name to match error stack
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
    return <div>No data available</div>;
  }

  return (
    <div className="w-full h-64 bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-2">Savings Progress</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            formatter={(value) => [`$${value}`, "Savings"]}
            contentStyle={{ 
              backgroundColor: "white", 
              border: "1px solid #e2e8f0",
              borderRadius: "4px",
              padding: "8px"
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="savings"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Savings"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}