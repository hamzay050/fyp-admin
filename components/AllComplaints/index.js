import React,{useEffect, useState} from 'react'
import {Avatar, Box, Typography,Modal,Grid,Badge} from '@mui/material'
import {GET} from "@/services/httpClient"

const Index = () => {
  const [data, setData] = useState([])

      async function getAllReports(){
       try{
        const response= await GET('/report')
        setData(response)
       }catch(error){
           console.log(error)
       }
      }
     useEffect(()=>{
        getAllReports()
     },[])

  return (
    
    <>

{
       data &&  data?.map((report)=>{
            return(
              <Box key={report._id} sx={{display:'flex',justifyContent:'center',margin:'2rem 0',height:"auto"}}>
              <Grid container spacing={1} alignItems='center' sx={{backgroundColor:'#fff',border:'1px solid #d5d3d3',padding:'0.2rem 0',boxShadow:1,borderRadius:'10px',width:'80%',maxHeight:"200px", mixHeight:'auto'}}>
                <Grid item xs={1} sx={{display:"flex" ,justifyContent:"center"}}>
                <Box display="flex" alignItems="center">
                <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg"   sx={{ width: 56, height: 56 }}
               
         />
          </Box>
                </Grid>
                <Grid item xs={9}>
                  <Box >
                    <Typography variant='body1' sx={{fontSize:"14px",fontWeight:"600", marginBottom:'0.2rem'}}>{report.reportTitle}</Typography>
                    <Typography variant='body2' sx={{fontSize:"12px"}}> {report.reportDetails}</Typography>
                  </Box>
                 
                </Grid>
                <Grid item xs={2}>
                <Box width="110px" display="flex" alignItems="center" justifyContent="center" borderRadius="50px">
            <Badge badgeContent={report.status} color={(report.status==='pending' || report.status==='rejected')?'secondary':'primary'} />
          </Box>
                </Grid>
                </Grid>
               
                </Box>
            )
          })
        }

    </>
  )
}

export default Index
        