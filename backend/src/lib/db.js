import mongoose from 'mongoose'

//connect DB

export const connectDB = async()=>{
    //await this because it takes little bit of time
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Mongoose connected ${conn.connection.host}`);
    }   
    catch(error){
        console.log(`Mongoose connection error ${error}`); 
    }
};