import mongoose from 'mongoose'

const connectDB = async() => {
    try {
        const options = {
            autoIndex: false, // Don't build indexes
            maxPoolSize: 30, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000 // Close sockets after 45 seconds of inactivity
          }
        const conn = await mongoose.connect(process.env.MONGO_URL,options)
        console.log('connected to mongodb database')
    }catch(error){
        console.log('Error in mongodb')
    }    
}

export default connectDB
