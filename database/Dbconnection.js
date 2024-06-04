import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
  .connect("mongodb+srv://meghanabscmpcs:sDQBKBxKHtOwQLdH@cluster0.q7l2wjb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  
    
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};