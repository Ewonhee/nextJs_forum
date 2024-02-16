import { connectDB } from '@/util/database'
// import { connect } from 'http2'
// import { MongoClient } from 'mongodb'
import React from 'react'

const page = async() => {


  const client = await connectDB;
  const db = client.db("forum")
  let reslut = await db.collection('post').find().toArray()
  console.log(reslut)
  return (
    <div>안녕</div>
  )
}

export default page