import '@/styles/globals.css'
import { createTheme,colors,ThemeProvider,Grid } from '@mui/material'
import Sidebar from '@/components/Admin/Sidebar'

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
        <Grid container>
          <Grid item xs={2.4}>
            <Sidebar/>
          </Grid>
          <Grid item xs={9.6}>
        <Component {...pageProps} />
          </Grid>
        </Grid>
      </ThemeProvider>
    
    ) 
}
