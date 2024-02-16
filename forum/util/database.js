import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://test:test1@leewonhee.uao2bbd.mongodb.net/?retryWrites=true&w=majority'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }

// 서버디비는 한번만 요청해야하기 떄문에 따로 둔다.