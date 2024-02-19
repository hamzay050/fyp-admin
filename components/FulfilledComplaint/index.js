import {Box,Typography,Grid, Button,Avatar} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function FulfilledComplaint() {
  return (
    <>
         <Box sx={{display:'flex',justifyContent:'center',margin:'2rem 0',height:"120px"}}>
      <Grid container spacing={1} sx={{backgroundColor:'#fff',border:'1px solid #d5d3d3',boxShadow:1,borderRadius:'10px',width:'80%',maxHeight:"200px", mixHeight:'auto'}}>
        <Grid item xs={1} sx={{display:"flex" ,justifyContent:"center"}}>
        <Box display="flex" alignItems="center">
        <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg"   sx={{ width: 56, height: 56 }}
       
 />
  </Box>
        </Grid>
        <Grid item xs={9}>
          <Box  sx={{padding:"15px 0px 0px"}}>
            <Typography variant='body1' sx={{fontSize:"14px",fontWeight:"600", marginBottom:'0.2rem'}}>John Deo</Typography>
            <Typography variant='body2' sx={{fontSize:"12px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic iusto sint, ducimus recusandae earum possimus cumque quis nulla! Qui!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ea praesentium dolor nobis numquam exercitationem incidunt tenetur eveniet, velit earum.</Typography>
          </Box>
         
        </Grid>
        <Grid item xs={2} sx={{}}>
        <Box display="flex" justifyContent="center" mt="85px" ml="4px" >
            <CheckCircleIcon fontSize='small' color='primary'/>
            <Typography variant='caption' color='primary' >Fulfilled</Typography>
        </Box>
        </Grid>
        </Grid>
       
        </Box>
       
         
        {/* </Grid> */}
    
      
    {/* </Box>  */}
    </>
  )
}
