const express = require("express");
require("../src/db/conn");

const MensRanking = require("../src/models/mens");
const router = require("./routers/men");

const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());
app.use(router);

// ####################################################################
// we made some update here now we are going to push this on github.
app.get("/check", (req, res) => {
  res.send("learn about how to push code in Github");
});

app.get("/hello", (req, res) => {
  res.send("hello");
});
// ####################################################################

app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});
