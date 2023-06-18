import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      uv: 1000,
    },
    {
      name: 'Feb',
      uv: 3000,
    },
    {
      name: 'Mar',
      uv: 2000,
    },
    {
      name: 'Apr',
      uv: 3080,
    },
    {
      name: 'Mei',
      uv: 2890,
    },
    {
      name: 'Jun',
      uv: 5390,
    },
    {
      name: 'Jul',
      uv: 3490,
    },
  ];

function LineChartSoldMonthly()
{
    return(
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={3}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineChartSoldMonthly;