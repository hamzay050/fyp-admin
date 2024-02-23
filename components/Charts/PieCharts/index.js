import * as React from 'react';
// import  PieChart  from '@mui/x-charts/PieChart';
import {PieChart} from "@mui/x-charts"

const PieCharts =() => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Child' },
            { id: 1, value: 15, label: 'Man' },
            { id: 2, value: 20, label: 'Woman' },
          ],
        },
      ]}
      width={350}
      height={200}
    />
  );
}
export default PieCharts