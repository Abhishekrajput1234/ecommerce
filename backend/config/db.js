
const dns = require("node:dns");

// Fix Node.js DNS resolution
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");

const ConnectDB = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is missing from .env");
        }

        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB connected successfully");
        console.log("Database:", mongoose.connection.name);

    } catch (error) {
        console.error("MongoDB Error:", error.message);
        throw error;
    }
};

module.exports = ConnectDB;
