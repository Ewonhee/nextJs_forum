import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {

 
  

  if (요청.method == 'DELETE'){

    
    // 유저정보
    let session = await getServerSession(요청, 응답, authOptions)


    let db = (await connectDB).db('forum')
    let 찾은거 = await db.collection('post').findOne({ _id : new ObjectId(요청.body) })


    console.log(찾은거.author)
    console.log(session.user.email)

    if(찾은거.author === session.user.email){

      let result = await db.collection('post').deleteOne({ _id : new ObjectId(요청.body)})
      return 응답.status(200).json('삭제완료')

    }else{
      return 응답.status(403).json('현재유저와 작성자 불일치')
    }
  }
}

// 서버의 계정이랑 , 요청받은 계정이랑 같는지 유뮤 판단후 삭제실행
//######################### json 화면이 왜 안나오는지 모르겠음