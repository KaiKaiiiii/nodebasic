const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello 123");
});

app.listen(port, () => {
  console.log(`Example app listen at port:${port}`);
});
