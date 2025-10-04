import mongoose from "mongoose";



type connectionObject = {
    isConnected?: number
}

const connection: connectionObject ={}

async function dbconnect(){

     if(connection.isConnected){
        console.log("Already connected to database");
        return
        
    }

    try {
     const db =   await mongoose.connect(process.env.MONGODB_URI || '')

      connection.isConnected =  db.connections[0].readyState

        console.log("DB connected successfully");
        
    } catch (error) {
  
        console.log("database connection error");

        process.exit(1);
        
        
    }
}


export default dbconnect