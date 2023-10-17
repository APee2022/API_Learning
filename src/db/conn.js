const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://0.0.0.0:27017/olymics")
  .then(() => {
    console.log("connection successful...");
  })
  .catch((e) => {
    console.log(e);
  });
