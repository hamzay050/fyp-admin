import  React,{useState,useEffect,useRef} from 'react';
import {GET,UPDATE} from "@/services/httpClient"
import {Box,Typography,Grid, Button,Avatar,IconButton, Menu,MenuItem,Link} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function PendingComplaint() {
  const [Setting, setSetting] = useState(false);
  const [data, setData] = useState([])
  const menu = useRef();


  useEffect(() => {
    let handler = (e) => {
      if (menu.current && !menu.current.contains(e.target)) {
        setSetting(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  async function getPendingReports(){
    try{
     const response= await GET('/report/pending')
     setData(response)
    }catch(error){
        console.log(error)
    }
   }
   useEffect(()=>{
     getPendingReports()
   },[])
   const handleRequest= async (id,status)=>{
    try {
      const response= await UPDATE(`/report/pending-status/${id}`,{status: status})
      getPendingReports();
    } catch (error) {
      console.log(error)
    }
   }
  return (
    <>
   <Box mt='2rem'>
   {
      data?.map((report)=>{
        return(
          <Box sx={{display:'flex',justifyContent:'center',margin:'0.5rem 0',height:"120px"}}>
      <Grid container  justifyContent="space-around" alignItems='center' sx={{backgroundColor:'#fff',border:'1px solid #d5d3d3',borderRadius:'10px',width:'80%',maxHeight:"200px", mixHeight:'auto',boxShadow:1}}>
        <Grid item xs={1} sx={{display:"flex" ,justifyContent:"center"}}>
          <Box display="flex" alignItems="center">
        <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg"   sx={{ width: 56, height: 56 }}
       
 />
  </Box>
        </Grid>
        <Grid item xs={9}>
          <Box >
            <Typography variant='body1' sx={{fontSize:"14px",fontWeight:"600", marginBottom:'0.2rem'}}>{report.reportTitle}</Typography>
            <Typography variant='body2' sx={{fontSize:"12px"}}>{report.reportDetails}</Typography>
          </Box>
         
        </Grid>
        <Grid item xs={1}>
          <Button onClick={()=>handleRequest(report._id,'approved')} variant='contained' size='small' color='secondary' sx={{color:'white'}}><Typography textTransform='none' fontSize='12px'>Approve</Typography></Button>
          <Button onClick={()=>handleRequest(report._id,'cancelled')} variant='contained' size='small' color='secondary' sx={{color:'white',margin:'0.3rem 0'}}><Typography textTransform='none' fontSize='12px'>Cancel</Typography></Button>

        </Grid>
      </Grid>
      
    </Box>
        )
      })
    }
   </Box>
    </>
  )
}
