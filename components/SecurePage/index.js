import React from 'react'
import { useRouter } from "next/router";
import { useEffect } from 'react';
import jwt from "jsonwebtoken"
import cookies from "cookie"

export default function SecurePage({children}) {
    const router=useRouter();

    useEffect(()=>{
    const cookiesData = cookies.parse(document.cookie);
    const token = cookiesData["accessToken"];
    console.log("🚀 ~ useEffect ~ cookiesData:", token);

    if(!token){
        router.push('/admin')
    }

    try {
        const decoded = jwt.verify(token, "mysecret%$sha256/!alpha$%$bang.etae");
        if(decoded){
            return ;
        }
    } catch (error) {
        console.log(error)
        router.push('/admin')
    }
},[router])
   return children;
}
