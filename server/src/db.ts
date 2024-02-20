import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const uri=process.env.MONGO_URI as string

export const connectToMongo = ()=>{
    mongoose.connect(uri )
    .then(()=>{
        console.log("CONNECTED TO MONGO SUCCESSFULLY")
    }).catch((err:any)=>{
        console.log(err)
    })
}

