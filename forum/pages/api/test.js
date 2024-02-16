import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()

    console.log(result)

    const time = new Date()

    if(요청.method == 'GET'){
        응답.status(200).json(time)
    }
    if(요청.method == 'POST'){
        응답.status(200).json(요청.body)
    }
  }