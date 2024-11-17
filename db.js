const mongoose = require('mongoose');

const connectDB=async()=>{

const mongo_URI = process.env.MONGO_URI;
// const db_NAME = process.env.DB_NAME;

if (!mongo_URI) {
    console.error('MongoDB URI or Database Name is not defined in environment variables.');
    process.exit(1);
}

console.log(`Connecting to MongoDB at ${mongo_URI}`);

try {

    const connection = await mongoose.connect(`${mongo_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('MongoDB connected:', connection.connection.host);

} catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
}
}
module.exports=connectDB;