import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
    { name: 'Tour', value: 60 },
    { name: 'Rental', value: 10},
    { name: 'Activity', value: 30}
];

const COLORS = ['#454C56', '#61CCB7', '#5589CD'];

function PieComponent()
{
    return(
        <>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                >
                    {data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </>
    );
}

export default PieComponent;