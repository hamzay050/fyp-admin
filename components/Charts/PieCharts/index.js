import * as React from 'react';
// import  PieChart  from '@mui/x-charts/PieChart';
import {PieChart} from "@mui/x-charts"
import {GET} from "@/services/httpClient"
import { useEffect,useState } from 'react';



const PieCharts =() => {
  const [completedCount, setCompletedCount] = useState(0)
  const [rejectedCount, setRejectedCount] = useState(0)
  
  useEffect(()=>{
    async function fetchData(){
      try {
        const getCompletedAppointment= await GET('/appointment/completed/appointments')
        const getRejectedAppointment= await GET('/appointment/rejected/appointments')
        setCompletedCount(getCompletedAppointment.length)
        setRejectedCount(getRejectedAppointment.length)
      } catch (error) {
       console.log(error) 
      }
    }
    fetchData()
  },[])
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: completedCount, label: 'Completed' },
            { id: 1, value: rejectedCount, label: 'Rejected' },

          ],
        },
      ]}
      width={350}
      height={200}
    />
  );
}
export default PieCharts