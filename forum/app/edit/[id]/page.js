import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react'

const Edit = async(props) => {

    

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})
    // console.log(result)

    // await db.collection('post').updateOne({수정할게시물정보}, {$set:{title:'바보'}} )


  return (
    <div className="p-20">
            <h4>수정페이지</h4>
            <form action='/api/post/edit2' method="POST">
              <input name="title" defaultValue={result.title}/>
              <input name="content" defaultValue={result.content}/>
              <input style={{display: 'none'}}  name="_id" defaultValue={result._id.toString()}/>
              
              <button type='submit'>전송</button>
            </form>
    </div>
  )
}

export default Edit