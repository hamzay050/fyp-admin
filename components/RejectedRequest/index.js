import React,{useState,useEffect} from 'react'
import { Box,Avatar,Typography,Button,Modal,Badge } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import {GET} from "@/services/httpClient"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:500,
  bgcolor: 'background.paper',
  border: '2px solid #white',
  boxShadow: 24,
  p: 1,
  borderRadius:'5px'
};

export default function RejectedRequest() {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  async function getDoctorApprovedProfiles(){
    try{
     const response= await GET('/doctor/doctor-rejected-profiles')
     setData(response)
    }catch(error){
        console.log(error)
    }
   }
   useEffect(()=>{
     getDoctorApprovedProfiles()
   },[])

   const handleChange= async (id)=>{
    try {
      const response= await GET(`/doctor/doctor-profiles/${id}`)
      console.log(response)
      setUserData(response)
      setOpen(true)
     } catch (error) {
      console.log(error)
     }
   }
  return (
   
    <>
      {
        data && data.map((value)=>{
          return(
            <Box display='flex' justifyContent='center'>
<Box display="flex" justifyContent="space-around" alignItems="center"  sx={{backgroundColor:'white',boxShadow:1,margin:'2rem',border:'1px solid #d5d3d3',borderRadius:'5px',width:'80%'}}>
        
        <Box sx={{display:'flex',gap:"10px",alignItems:'center',margin:'0.4rem 0'}}>
  
      <Avatar alt="Remy Sharp" sx={{width:'40px',height:'40px'}} src="/static/images/avatar/1.jpg" />
      <Typography variant='body1' sx={{fontWeight:'600',color:'#3c3e3ee6',fontSize:"14px"}}>{value.firstName+" "+ value.lastName}</Typography>
      </Box>
      <Box height="30px" width="110px" backgroundColor="rgb(239,230,255)" display="flex" alignItems="center" justifyContent="center" borderRadius="50px">
                  <Typography variant='body2' color="#800080">Pshychologist</Typography>
              </Box>
        
        <Box sx={{display:'flex',justifyContent:'end',margin:'0.5rem 1rem'}}>
        <ClearIcon fontSize='small' color='danger' sx={{color:"red"}}/>
    <Typography variant='caption' color='danger' sx={{color:"red"}}>Rejected</Typography>
          </Box>
          <Box sx={{display:'flex',justifyContent:'center'}}>
  
        <Button variant='contained' onClick={()=>handleChange(value._id)} size='small' color='secondary' sx={{color:'#fff'}}>Details</Button>
        </Box>
      </Box>
</Box>
          )
        })
      }


<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display='flex' justifyContent='space-between' m='0.6rem 0'>
            <Box>
          <Badge sx={{marginLeft:'1.5rem'}} badgeContent='Rejected' color='secondary'></Badge>
            </Box>
          <ClearIcon sx={{cursor:'pointer'}} onClick={handleClose}/>
          </Box>
          <Box sx={{overflowY:'scroll',height:'90%'}}>


            {/* Personal information */}
              <Box m='0.4rem 0'>
              <Typography sx={{color:'#295045a6',fontSize:'14px'}}>Personal Information:</Typography>
              <Box display='flex' flexWrap='wrap'>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>First name:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.firstName}</Typography>
              </Box>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>Last name:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.lastName}</Typography>
              </Box>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>Gender:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.gender}</Typography>
              </Box>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>CNIC:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.nationalIdentityNumber}</Typography>
              </Box>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>Medical license number:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.medicalLicenseNumber}</Typography>
              </Box>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>Speciality:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.speciality}</Typography>
              </Box>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>Email:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.email}</Typography>
              </Box>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>Contact number:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.contactNumber}</Typography>
              </Box>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>Street address:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.streetAddress}</Typography>
              </Box>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>Street address II:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.streetAddress2}</Typography>
              </Box>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>City:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.city}</Typography>
              </Box>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>State:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.state}</Typography>
              </Box>
              <Box display='flex' m='0.4rem'>
                <Typography sx={{fontSize:'15px',fontWeight:600}}>Country:</Typography>
                <Typography sx={{fontSize:'15px'}}>{userData.country}</Typography>
              </Box>
              </Box>
            </Box>
            
        {/* education */}
       <Typography sx={{color:'#295045a6',fontSize:'14px'}}>Education Information:</Typography>
          {
            userData?.educationData && userData.educationData.map((value)=>{
                   return(
                    <Box m='0.4rem 0' key={value._id}>
                    <Box display='flex' flexWrap='wrap'>
                      <Box display='flex' m='0.4rem'>
                        <Typography sx={{fontSize:'15px',fontWeight:600}}>Degree:</Typography>
                        <Typography sx={{fontSize:'15px'}}>{value.title}</Typography>
                      </Box>
                      <Box display='flex' m='0.4rem'>
                        <Typography sx={{fontSize:'15px',fontWeight:600}}>Start date:</Typography>
                        <Typography sx={{fontSize:'15px'}}>{new Date(value.startDate).toLocaleDateString()}</Typography>
                      </Box>
                      <Box display='flex' m='0.4rem'>
                        <Typography sx={{fontSize:'15px',fontWeight:600}}>End date:</Typography>
                        <Typography sx={{fontSize:'15px'}}>{new Date(value.endDate).toLocaleDateString()}</Typography>
                      </Box>
                      <Box display='flex' m='0.4rem'>
                        <Typography sx={{fontSize:'15px',fontWeight:600}}>Institute:</Typography>
                        <Typography sx={{fontSize:'15px'}}>{value.institute}</Typography>
                      </Box>
                      </Box>
                    </Box>
                   )
            })
          }

          {/* Certifications */}
       <Typography sx={{color:'#295045a6',fontSize:'14px'}}>Certifications Information:</Typography>
          
          {
            userData?.certificationData && userData.certificationData.map((value)=>{
               return(
                <Box m='0.4rem 0' key={value._id}>
                <Box display='flex' flexWrap='wrap'>
                  <Box display='flex' m='0.4rem'>
                    <Typography sx={{fontSize:'15px',fontWeight:600}}>Certification:</Typography>
                    <Typography sx={{fontSize:'15px'}}>{value.title}</Typography>
                  </Box>
                  <Box display='flex' m='0.4rem'>
                    <Typography sx={{fontSize:'15px',fontWeight:600}}>Start date:</Typography>
                    <Typography sx={{fontSize:'15px'}}>{new Date(value.startDate).toLocaleDateString()}</Typography>
                  </Box>
                  <Box display='flex' m='0.4rem'>
                    <Typography sx={{fontSize:'15px',fontWeight:600}}>End date:</Typography>
                    <Typography sx={{fontSize:'15px'}}>{new Date(value.endDate).toLocaleDateString()}</Typography>
                  </Box>
                  <Box display='flex' m='0.4rem'>
                    <Typography sx={{fontSize:'15px',fontWeight:600}}>Institute:</Typography>
                    <Typography sx={{fontSize:'15px',textAlign:'start', overflow: 'hidden', wordWrap: 'break-word'}}>{value.institute}</Typography>
                  </Box>
                  </Box>
                </Box>
               )
            })
          }
         {/* Work  */}
   <Typography sx={{color:'#295045a6',fontSize:'14px'}}>Work history:</Typography> 
  {
    userData?.jobsData && userData.jobsData.map((value)=>{
      return(
        <Box m='0.4rem 0'>
        <Box display='flex' flexWrap='wrap'>
          <Box display='flex' m='0.4rem'>
            <Typography sx={{fontSize:'15px',fontWeight:600}}>Designation:</Typography>
            <Typography sx={{fontSize:'15px'}}>{value.title}</Typography>
          </Box>
          <Box display='flex' m='0.4rem'>
            <Typography sx={{fontSize:'15px',fontWeight:600}}>Start date:</Typography>
            <Typography sx={{fontSize:'15px'}}>{new Date(value.startDate).toLocaleDateString()}</Typography>
          </Box>
          <Box display='flex' m='0.4rem'>
            <Typography sx={{fontSize:'15px',fontWeight:600}}>End date:</Typography>
            <Typography sx={{fontSize:'15px'}}>{new Date(value.endDate).toLocaleDateString()}</Typography>
          </Box>
          <Box display='flex' m='0.4rem'>
            <Typography sx={{fontSize:'15px',fontWeight:600}}>Institute:</Typography>
            <Typography sx={{fontSize:'15px'}}>{value.institute}</Typography>
          </Box>
          <Box display='flex' m='0.4rem'>
            <Typography sx={{fontSize:'15px',fontWeight:600}}>Role:</Typography>
            <Typography sx={{fontSize:'15px',whiteSpace: 'normal'}}>{value.role}</Typography>
          </Box>
          </Box>
        </Box>
      )
    })
  }
          <Box m='0.4rem 0'>
          <Typography sx={{color:'#295045a6',fontSize:'14px'}}>About:</Typography>
          <Box display='flex' m='0.4rem'>
              <Typography sx={{fontSize:'15px'}}> {userData.doctorAbout} </Typography>
            </Box>
          </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
