// import mongoose from "mongoose";

// export const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: "RESERVATIONS",
//     })
//     .then(() => {
//       console.log("Connected to database!");
//     })
//     .catch((err) => {
//       console.log(`Some error occured while connecing to database: ${err}`);
//     });
// };

import mongoose from "mongoose";

// Function to connect to the database
export const dbConnection = async () => {
  try {
    // Attempt to connect to the database
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESERVATION",
      useNewUrlParser: true,  // Ensures proper use of MongoDB connection strings
      useUnifiedTopology: true, // Enables the new connection management engine in Mongoose
    });
    console.log("Connected to the database!");
  } catch (err) {
    // Log the detailed error message if connection fails
    console.error(`Error connecting to the database: ${err.message}`);
  }
};


