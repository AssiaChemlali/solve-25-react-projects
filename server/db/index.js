

const mongoose = require("mongose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://blog-mern:blog@cluster0.t67q7.mongodb.net/"
  )
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));