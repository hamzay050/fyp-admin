
import {Typography, Stack, Box ,Grid, Divider,Button} from  '@mui/material' 
import Image from 'next/image'
import Ellips from  '../assets/Ellipse 14.png'
import Docpic from '../assets/docpic.png'
import Logo from "../assets/headerLogo.png"
export default function index() {
  return (
    <>
     {/* width={572}  */}
     <Image src={Logo} width={300} style={{marginTop:"30px" , marginLeft:"10px"}} />
    <Grid container spacing={2} >
   
       <Grid item lg={6} md={6} sm={12} xs={12}>
           <Typography variant='h2' fontWeight={600}  paddingTop="247px" sx={{marginLeft:{lg:"40px",md:"5px" ,xs:"20px"} ,variant:{xs:"h3"} ,width:{lg:"572" ,xs:"350"}}} >
           Find & Search Your {' '}
   <span style={{color:"#0360D9"}} >Favourite</span> Doctor
           </Typography>
          <Button variant="contained"  sx={{marginLeft:{lg:"40px" , xs:"10px" } , marginTop:"15px" ,backgroundColor:"#0360D9"}} >Apply as patient</Button>
          <Button variant="contained"  sx={{marginLeft:"20px" ,marginTop:"15px"}}>Apply as Doctor</Button>

           </Grid>
           <Grid item lg={6} md={6} sm={12} xs={12} height="617px">
           
            <Image src={Ellips} alt='Ellips pic'   style= {{width:"600px", height:"300px", marginTop:"300px"}}  />
            <Image src={Docpic} alt='doctor pic'  height={600} style={{ position:"relative"  , bottom:"605px" ,right:"100px" }}    />
            
          
            
            </Grid>
           
</Grid>


 <Grid container height="80px"   backgroundColor="#0360D9"   color="white"  >
            <Grid item lg={3} md={4} sm={4} xs={3}>
<Typography variant='h4' fontWeight={700}  sx={{marginLeft:{lg:"60px", md:"30",sm:"30px" ,xs:"10px"} }} >
 24/7 <br />
<span style={{fontSize:"11px"}} >Available</span>   
</Typography>
</Grid>
<Grid item lg={3}  md={4} sm={4} xs={3}>
<Typography variant='h4'  fontWeight={700} sx={{marginLeft:{lg:"60px", md:"30",sm:"30px" ,xs:"10px"}}}>
 100+ <br />
 <span style={{fontSize:"11px"}}>Doctor's</span>
</Typography>
</Grid>
<Grid item lg={6}  md={4} sm={4} xs={6}>
  <Typography variant='h4'  fontWeight={700}  sx={{marginLeft:{lg:"60px", md:"30",sm:"30px" ,xs:"10px"}}}>
  1M+ <br />
 <span style={{fontSize:"11px"}}>Active Patient's </span>
</Typography>
</Grid>
</Grid> 

   </>
  )
}
