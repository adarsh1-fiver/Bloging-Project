
import mongoose from "mongoose"; 


const connectDb=async () =>{
  try {
    mongoose.connection.on('connected', () => 
      console.log("database Connected")
    );
    
    mongoose.connection.on('error', (err) => 
      console.error("MongoDB connection error:", err)
    );

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "tecoo",
    });
  } catch (error) {
    console.error("Failed to connect to DB:", error.message);
    throw error; //throw error
  }
}


export default connectDb;

