import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/util/database";

export default async function handler(요청, 응답){

    let session = await getServerSession(요청, 응답, authOptions)

    if (요청.method === 'POST'){
        console.log(요청.body);
        console.log(session);

        try{
            const client = await connectDB(); // 비동기 호출 방식으로 수정
            const db = client.db("forum")
            await db.collection('comment').insertOne(요청.body)
            return 응답.status(200).redirect('/list')
            
        }
        catch(error){

            return 응답.status(500).json('에러발생')
        }

    }
}
