import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import {GET} from "@/services/httpClient"
import { useEffect,useState } from 'react';

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

// /monthly/registered
const Index=()=> {
  useEffect(()=>{
    async function fetchData(){
      try {
        const getMonthlyRegistration= await GET('/profile/monthly/registered')
        console.log(getMonthlyRegistration)
      } catch (error) {
       console.log(error) 
      }
    }
    fetchData()
  },[])
  return (
    <LineChart
    sx={{marginLeft:"20px"}}
      width={670}
      height={300}
      series={[
        { data: pData, label: 'Patient' },
        { data: uData, label: 'Doctor' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
 export default Index