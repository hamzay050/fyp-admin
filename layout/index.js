import { useRouter } from "next/router"
import { Grid } from "@mui/material"
import Sidebar from "@/components/Sidebar"

export default function SideLayout({children}) {
    const router= useRouter();
  return (
    <>
      {
        router.pathname!=='/' ? 
        (<Grid container>
  
       <Grid item xs={2.4}>
         <Sidebar/>
       </Grid>
            
       <Grid item xs={9.6}>
       {children}
       </Grid>
     </Grid>
     ) :(
     <>{children}</>
     )
} 
    </>
  )
}
