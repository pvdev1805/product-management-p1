const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database has been connected successfully!");
  } catch (error) {
    console.log("Error ! Database has NOT been connected!");
    console.log(error);
  }
};
