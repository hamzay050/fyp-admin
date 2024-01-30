import '@/styles/globals.css'
import { createTheme,colors,ThemeProvider,Grid } from '@mui/material'
import Sidebar from '@/components/Sidebar'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AppContextProvider from "@/context/appContext"
import GlobalSnackbar from "@/components/Snackbar"
import SimpleBackdrop from "@/components/SimpleBackdrop"

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
        <AppContextProvider>
          <GlobalSnackbar/>
          <SimpleBackdrop/>
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
      </AppContextProvider>
      </ThemeProvider>
    
    ) 
}
