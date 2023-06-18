import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '01 Jan',
      uv: 1000,
    },
    {
      name: '02 Jan',
      uv: 2000,
    },
    {
      name: '03 Jan',
      uv: 3000,
    },
    {
      name: '04 Jan',
      uv: 4000,
    },
    {
      name: '05 Jan',
      uv: 5000,
    },
    {
      name: '06 Jan',
      uv: 6000,
    },
    {
      name: '07 Jan',
      uv: 7000,
    },
  ];

function LineChartSoldDaily()
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
            <YAxis type='text'/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#FFA500" strokeWidth={3}/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineChartSoldDaily;