// import Charts from '../../components/Charts';
import { useState } from 'react';
import BarChart from '../../components/Charts/BarChart';
import DonutChart from '../../components/Charts/DonutChart';
import LineChart from '../../components/Charts/LineChart';
import PieChart from '../../components/Charts/PieChart';

const Chart = () => {
  const [showBarChart, setShowBarChart] = useState(false);
  const [showDonutChart, setShowDonutChart] = useState(false);
  const [showPieChart, setshowPieChart] = useState(false);
  const [showLineChart, setshowLineChart] = useState(false);

  return (
    <div className="w-full bg-white text-lightWhite">
      <div className="grid grid-cols-2 gap-4 m-4">
        <div className="flex justify-between p-4 font-bold bg-blue-500 rounded-md ">
          <div>Bar Chart</div>
          <button
            type="button"
            className="px-4 bg-blue-400 rounded-lg shadow-xl "
            onClick={() => setShowBarChart(!showBarChart)}
          >
            -
          </button>
        </div>

        <div className="flex justify-between p-4 font-bold bg-blue-500 rounded-md ">
          <div>Line Chart</div>
          <button
            type="button"
            className="px-4 bg-blue-400 rounded-lg shadow-xl"
            onClick={() => {
              setshowLineChart(!showLineChart);
            }}
          >
            {showLineChart ? '-' : '+'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 m-4">
        <div>{showBarChart ? <BarChart /> : ''}</div>
        <div>{showLineChart ? <LineChart /> : ''}</div>
      </div>
      <div className="grid grid-cols-2 gap-4 m-4">
        <div className="flex justify-between p-4 font-bold bg-blue-500 rounded-md ">
          <div>Pie Chart</div>
          <button
            type="button"
            className="px-4 bg-blue-400 rounded-lg shadow-xl"
            onClick={() => {
              setshowPieChart(!showPieChart);
            }}
          >
            -
          </button>
        </div>
        <div className="flex justify-between p-4 font-bold bg-blue-500 rounded-md ">
          <div>Donut chart</div>
          <button
            type="button"
            className="px-4 bg-blue-400 rounded-lg shadow-xl"
            onClick={() => setShowDonutChart(!showDonutChart)}
          >
            -
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 m-4">
        {' '}
        <div>{showPieChart ? <PieChart /> : ''}</div>
        <div>{showDonutChart ? <DonutChart /> : ''}</div>
      </div>
    </div>
  );
};

export default Chart;
