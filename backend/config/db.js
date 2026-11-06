
const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error('MONGO_URL is missing');
        }

        await mongoose.connect(process.env.MONGO_URL);

        console.log('MongoDB connected successfully');

    } catch (error) {
        console.error('MongoDB Error:', error.message);
        throw error;
    }
};

module.exports = ConnectDB;
