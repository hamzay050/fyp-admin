import '@/styles/globals.css'
import { createTheme,colors,ThemeProvider,Grid } from '@mui/material'
import AppContextProvider from "@/context/appContext"
import GlobalSnackbar from "@/components/Snackbar"
import SimpleBackdrop from "@/components/SimpleBackdrop"
import SideLayout from "@/layout/index"

export default function App({ Component, pageProps }) {

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
          <SideLayout>
          <Component {...pageProps} />
          </SideLayout>
      </AppContextProvider>
      </ThemeProvider>
    
    ) 
}
