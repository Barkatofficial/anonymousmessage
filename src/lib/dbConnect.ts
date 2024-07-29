import mongoose from "mongoose";

type ConnectionObject = {
    isConnected ?: number
}

const connection : ConnectionObject = {}

export async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("Already connect the database")
        return
    }

    try{
        // console.log(process.env.MONGODB_URI)
        // const db = await mongoose.connect(process.env.MONGODB_URI || '',{})
        const db = await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://barkatOrg:barkatOrg123@cluster0.kmb94b2.mongodb.net/',{})

        connection.isConnected = db.connections[0].readyState
        console.log("Db Connected Successfully");
        
    }catch(error){
      console.log("Db not Connected",error);
      process.exit(1)
      
    }
}