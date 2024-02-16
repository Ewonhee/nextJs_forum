


import { connectDB } from '@/util/database';
// import { ObjectId } from 'mongodb';
import Link from 'next/link'
import DetailLink from './DetailLink';
import Listltem from './Listltem';

export const dynamic = 'force-dynamic'


const page = async() => {

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()
    // console.log(result[0]._id)

  return (
    <div className='list-bg'>
        <Listltem result={result}/>
    </div>
   
  )
}


export default page