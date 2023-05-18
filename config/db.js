const mongoose = require('mongoose');

const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });   

    console.log(`MongoDb conn ${conn.connection.host}`.cyan.bold);
}

module.exports = connectDB;
