
const mongoose = require("mongoose");

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB connected successfully");
        console.log("Database:", mongoose.connection.name);

    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        throw error;
    }
};

module.exports = ConnectDB;
