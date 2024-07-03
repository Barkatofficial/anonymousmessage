import mongoose from "mongoose";

type ConnectionObject = {
    isConnected ?: number
}

const connection : ConnectionObject = {}

async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("Already connect the database")
        return
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '',{})
        connection.isConnected = db.connections[0].readyState
        console.log("Db Connected Successfully");
        
    }catch(error){
      console.log("Db not Connected",error);
      process.exit(1)
      
    }
}