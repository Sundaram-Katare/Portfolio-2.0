import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

const DSAPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationStart, setAnimationStart] = useState(false);

  // Your data - adjust these numbers based on your actual solved problems
  const totalProblems = 310;
  const easySolved = 120; // example
  const mediumSolved = 150; // example
  const hardSolved = 40; // example

  const data = [
    { name: 'Easy', value: easySolved, color: '#4CAF50' },
    { name: 'Medium', value: mediumSolved, color: '#FFC107' },
    { name: 'Hard', value: hardSolved, color: '#F44336' }, // Assuming LC has ~2000 problems
  ];

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimationStart(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="pie-chart-container gap-0 flex flex-col ">
      <h3 className='font-semibold text-md text-center lg:text-xl'>LeetCode Problems Solved: {totalProblems}+</h3>
      <ul className='flex flex-row text-center justify-center gap-4 font-semibold text-xs mt-3 md:text-md lg:text-lg gap-10'>
        <li className='bg-green-400 p-3 rounded-xl'>Easy = 120</li>
        <li className='bg-yellow-400 p-3 rounded-xl'>Medium = 150 </li>
        <li className='bg-red-500 p-3 rounded-xl'>Hard = 40</li>
      </ul>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={`lg: 60`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
            animationBegin={0}
            animationDuration={1000}
            animationEasing="ease-out"
            isAnimationActive={animationStart}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default DSAPieChart;