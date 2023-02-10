import mongoose from "mongoose";
const ConnectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    const result = await mongoose.connect(
      "mongodb+srv://MYDatabase001:Akash%40123@cluster0.d8reqln.mongodb.net/order_tracking_system"
    );
    if (result) {
      console.log("database is connected");
    } else { 
      console.log("not connected");
    }
  } catch (error) {
    console.log(`not connected due to some error\n${error}`);
  }
};
export default ConnectToMongo;
