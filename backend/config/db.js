const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {

    console.log("MONGO_URL =", process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB connected successfully");

  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectDB;