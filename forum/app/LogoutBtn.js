'use client'

import {signIn, signOut} from 'next-auth/react'

import React from 'react'

const LogoutBtn = () => {
  return (
    
   
    <button onClick={()=>{signOut() }}>로그아웃</button> 
    
    
  )
}

export default LogoutBtn