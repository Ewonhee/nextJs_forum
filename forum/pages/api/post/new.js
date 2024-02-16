import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답){

    let session = await getServerSession(요청, 응답, authOptions)

    // console.log(session)

    if(session){
        요청.body.author = session.user.email
    }


    if (요청.method == 'POST'){
        
        if(요청.body.title == ' '){
            return 응답.status(500).json('제목이 없습니다')
        }

       try {

        const client = await connectDB;
        const db = client.db("forum")
        await db.collection('post').insertOne(요청.body)
        return 응답.status(200).redirect('/list')

       } catch (error) {

        return 응답.status(500).json('에러발생')
        
       }
    }

}

// DB 예외 처리를 위해 try catch 문법을 사용한다.