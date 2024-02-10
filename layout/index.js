import jwt from "jsonwebtoken"
import cookies from "cookie"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Grid } from "@mui/material"
import Sidebar from "@/components/Sidebar"

export default function index({children}) {
    const [showSideBar, setShowSideBar] = useState(false)
    const router= useRouter();
    useEffect(()=>{
        const cookie= cookies.parse(document.cookie);
        const token= cookie['accessToken']
        if(!token){
              router.push('/')
        }
        try {
           const verifyToken= jwt.verify(token, "mysecret%$sha256/!alpha$%$bang.etae")
           if(verifyToken){
               setShowSideBar(true)
           }else{
            setShowSideBar(false)
           }
            
        } catch (error) {
            
        }
    })
  return (
    <>
      {
        showSideBar ? 
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
