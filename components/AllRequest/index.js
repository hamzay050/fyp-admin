import React,{useEffect, useState} from 'react'
import {Avatar, Box, Typography,Modal,Grid,Badge, TextField,InputAdornment} from '@mui/material'
import {Search} from "@mui/icons-material"
import {GET} from "@/services/httpClient"
import ClearIcon from '@mui/icons-material/Clear';

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

const Index = () => {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("")
  const handleClose = () => setOpen(false);

      async function getDoctorProfiles(){
       try{
        const response= await GET('/doctor/doctor-profiles')
        setData(response)
       }catch(error){
           console.log(error)
       }
      }
     useEffect(()=>{
         getDoctorProfiles()
     },[])
     const handleClick= async (id)=>{
         try {
          const response= await GET(`/doctor/doctor-profiles/${id}`)
          console.log(response.educationData)
          setUserData(response)
          setOpen(true)
         } catch (error) {
          console.log(error)
         }
     }

     const filteredData= data && data.filter((value)=>{
      const response= search
      ? value.firstName.toLowerCase() === search.toLowerCase()
      : true;
      return response;
     })
  return (
    
    <>

    <Box mt='1rem' display='flex' justifyContent='end' width='94%'>
    {data && data.length>0 && 
   <TextField
   label='Search..'
   variant="outlined"
   size="small"
   value={search}
   onChange={(e)=>setSearch(e.target.value)}
   InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <Search />
      </InputAdornment>
    ),
  }}
   sx={{}}
 />
    }
    </Box>

      <Grid container justifyContent='center'>
        <Grid item xs={11}>
        <Box>
         <Box display="flex" justifyContent="space-between" mt="20px" mr="13px" pl="25px" pr="15px">
            <Typography>Name</Typography>
            <Typography>Email</Typography>
            <Typography>Country</Typography>
            <Typography>Phone no.</Typography>
            <Typography>Status</Typography>
           
         </Box>
       {filteredData && filteredData.map((value)=>{
        return(
          <Box display="flex" key={value._id} onClick={()=>handleClick(value._id)}  justifyContent="space-between" alignItems="center" boxShadow="2" mt="10px" mr="13px" height="60px" borderRadius="8px" pl="20px" pr="10px" backgroundColor="white" >
          <Box display="flex" gap="5px" alignItems="center" > <Avatar src={value.profilePicture?process.env.NEXT_PUBLIC_BASE_URL+value.profilePicture:''} sx={{width:"30px",height:"30px"}}></Avatar> <Typography variant='body2'>{value.firstName+ " "+ value.lastName}</Typography></Box>
          <Typography variant='body2'>{value.email}</Typography>
          <Typography variant='body2'>{value.country}</Typography>
          <Typography variant='body2'>{value.contactNumber}</Typography>
          <Box width="110px" display="flex" alignItems="center" justifyContent="center" borderRadius="50px">
            <Badge badgeContent={value.status} color={(value.status==='pending' || value.status==='rejected')?'secondary':'primary'} />
          </Box>
       </Box>
        )
       }) }

      </Box>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display='flex' justifyContent='end' m='0.6rem 0'>
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

export default Index