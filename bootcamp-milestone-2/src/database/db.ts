// db.ts
import mongoose from "mongoose";

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!connection) {
    try{
        console.log("Connected successfully");
        connection = await mongoose.connect(url);
        return connection;
    }catch(err){
        console.log("Failed to connect");
        process.exit(1);
    }
  }
};

export default connectDB;