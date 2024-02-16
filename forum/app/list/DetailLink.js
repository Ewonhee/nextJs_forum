'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const DetailLink = () => {
    let router = useRouter()
  return (
    <botton onClick={()=>{router.push('/')}}>버튼</botton>
  )
}

export default DetailLink