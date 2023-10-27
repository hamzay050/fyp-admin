import '@/styles/globals.css'
import { createTheme,colors,ThemeProvider,Grid } from '@mui/material'
import Sidebar from '@/components/Admin/Sidebar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [route, setRoute] = useState(true)
  const router=useRouter();
  const curPath=router.pathname;
  useEffect(()=>{
    if(curPath==='/' || curPath==='/admin'){
      setRoute(false)
    }else{
      setRoute(true)
    }
  },[curPath])
  const theme=createTheme({
    palette:{
      primary:{
        main:colors.teal[400],
      },
      secondary:{
        main:colors.orange[300],
      }
    }
  })

  return(
      <ThemeProvider theme={theme}>
        <Grid container>
           { route &&  
          <Grid item xs={2.4}>
            <Sidebar/>
          </Grid>
               } 
          <Grid item xs={!route?12:9.6}>
        <Component {...pageProps} />
          </Grid>
        </Grid>
      </ThemeProvider>
    
    ) 
}
