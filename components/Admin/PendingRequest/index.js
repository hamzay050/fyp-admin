import React,{useState} from 'react'
import { Box,Avatar,Typography,Button,Modal, Grid, Divider } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import Address from "./AddressInformation";
import Personal from "./PersonalInformation";
import Medical from "./MedicalInformation";
import ClearIcon from '@mui/icons-material/Clear';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height:400,
  bgcolor: 'background.paper',
  border: '1px solid #d5d3d3',
  borderRadius:'5px',
  boxShadow: 24
};

export default function PendingRequest() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [component, setComponent] = useState(null)
  const renderComonent=(component)=>{
          setComponent(component)
  }
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',backgroundColor:'white',width:'280px',height:'260px',margin:'2rem',border:'1px solid #d5d3d3',borderRadius:'5px'}}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',margin:'1rem 0'}}>
    <Avatar alt="Remy Sharp" sx={{width:'100px',height:'100px'}} src="/static/images/avatar/1.jpg" />
    <Box m='1rem 0 0 0' sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <Typography variant='body1' sx={{fontWeight:'600',color:'#3c3e3ee6'}}>Doctor John Doe</Typography>
    <Typography variant='body2' sx={{margin:'0.1rem 0',color:'#3c3e3ee6'}}>Pshychologist</Typography>
    </Box>
      </Box>
      <Button onClick={handleOpen} variant='contained' color='secondary' sx={{color:'#fff',margin:'0 0 1.3rem 0',width:'150px'}}>Details</Button>
    </Box>

    <Modal
  open={open}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <Box sx={{display:'flex',justifyContent:'end',margin:'0.5rem',cursor:'pointer'}}>
   <ClearIcon onClick={handleClose}/>
  </Box>
      <Grid container sx={{width:'100%',height:'100%'}}>
        <Grid item xs={4.5}>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center',height:'90%',borderRight:'1px solid gray'}}>
      <Typography variant="body1" sx={{color:'#3c3e3ee6',cursor:'pointer',fontSize:'1.1rem',padding:'0.6rem 0.7rem',display:'flex',alignItems:'center'}} onClick={()=>{renderComonent('Personal')}}><PersonIcon sx={{margin:'0 0.4rem'}}/> Personal Information</Typography>
      <Typography variant='body1' sx={{color:'#3c3e3ee6',cursor:'pointer',fontSize:'1.1rem',padding:'0.6rem 0.7rem',display:'flex',alignItems:'center'}} onClick={()=>{renderComonent('Address')}}><HomeIcon sx={{margin:'0 0.4rem'}}/>Address Information</Typography>
      <Typography variant='body1' sx={{color:'#3c3e3ee6',cursor:'pointer',fontSize:'1.1rem',padding:'0.6rem 0.7em',display:'flex',alignItems:'center'}} onClick={()=>{renderComonent('Medical')}}><MedicalInformationIcon sx={{margin:'0 0.4rem'}}/> Medical Details</Typography>
      </Box>
        </Grid>
        <Grid item xs={7}>
        <Box m='0.5rem'> 
               {component===null && <Personal/>}
               {component==='Personal' && <Personal/>}
               {component==='Address' && <Address/>}
               {component==='Medical' && <Medical/>}
         </Box>
        </Grid>
        </Grid> 
    </Box>
</Modal>
    </>
  )
}
