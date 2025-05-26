import mongoose from "mongoose";

export const ConnectDb = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Database connection successfully!")
    } catch (error) {
        console.log("error while connect db", error)
    }
}