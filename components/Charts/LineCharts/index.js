import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Jan',
  'Fab',
  'March',
  'April',
  'May',
  'June',
  'July',
];

const Index=()=> {
  return (
    <LineChart
    sx={{marginLeft:"20px"}}
      width={610}
      height={300}
      series={[
        { data: pData, label: 'Woman' },
        { data: uData, label: 'Man' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
 export default Index