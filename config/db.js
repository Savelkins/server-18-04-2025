const mongoose = require("mongoose");
const CONSTANTS = require("../constants");

const { DB_HOST, DB_PORT, DB_NAME } = CONSTANTS;

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    process.exit(1);
  }
};

module.exports = connectDB;