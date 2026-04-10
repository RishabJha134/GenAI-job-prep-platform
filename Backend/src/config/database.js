const mongoose = require("mongoose");

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connect to database successfully")
    } catch (error) {
        console.log("error in connection of db"+error);
    }
}

module.exports = connectDB;