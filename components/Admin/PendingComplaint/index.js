import {Box,Typography,Grid, Button,Avatar} from '@mui/material'
export default function PendingComplaint() {
  return (
    <>
    <Box sx={{display:'flex',justifyContent:'center',margin:'2rem 0'}}>
      <Grid container sx={{backgroundColor:'white',border:'1px solid #d5d3d3',borderRadius:'5px',width:'80%',minHeight:'200px',maxHeight:'auto'}}>
      <Grid item xs={4} sx={{borderRight:'1px solid #d5d3d3'}}>
    <Box sx={{height:'66%',display:'flex',justifyContent:'center',margin:'0.5rem 0 0 0',alignItems:'center',flexDirection:'column'}}>
    <Avatar alt="Remy Sharp" sx={{width:'70px',height:'70px'}} src="/static/images/avatar/1.jpg" />
    <Typography variant='body1' sx={{fontWeight:'600',color:'#3c3e3ee6',margin:'0.5rem 0'}}>Doctor John Doe</Typography>
          </Box>
          <Box sx={{display:'flex',justifyContent:'start',flexDirection:'column',margin:'0 0.2rem'}}>
            <Typography variant='body2' sx={{fontWeight:'600',color:'#3c3e3ee6'}}>Submitted By:</Typography>
            <Typography variant='p' sx={{marginLeft:'1rem'}}>Patient Name</Typography>
            <Typography variant='p' sx={{marginLeft:'1rem'}}>Patient Email</Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{margin:'1rem'}}>
            <Typography variant='body1' sx={{fontWeight:'600',marginBottom:'0.5rem'}}>Complain Reason</Typography>
            <Typography variant='p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ea praesentium dolor nobis numquam exercitationem incidunt tenetur eveniet, velit earum.</Typography>
          </Box>
          <Box sx={{display:'flex',justifyContent:'end',alignItems:'end',margin:'2.5rem 2rem 1rem 2rem'}}>
            <Button variant='contained' color='secondary' sx={{color:'white'}}>Fulfill</Button>
          </Box>
        </Grid>
      </Grid>
      
    </Box>
    </>
  )
}
