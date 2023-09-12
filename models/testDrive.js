import mongoose from "mongoose";

const testDriveSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide a email"],
    },
    city:String,
    carType:String,
    additionalInfo:String,
    createdDate: {
        type: Date,
        default: Date.now, // This sets the default value to the current timestamp
    },
})

const TestDrives = mongoose.models.testdrives || mongoose.model("testdrives", testDriveSchema);

export default TestDrives;