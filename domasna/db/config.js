const mongoose = require("mongoose");
const uri = `mongodb+srv://skitac:<password>@cluster0.frwhldk.mongodb.net/semos?retryWrites=true&w=majority`;

async function connectDb() {
  try {
    await mongoose.connect(uri);
    console.log("mongodb is connected");
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
}

// connectDb();

module.exports = { connectDb };
