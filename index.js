const express = require("express");
const app = express();

const PORT = 3030;

app.get("/", (req, res) => {
  res.send({
    slackUsername: "Diseyi",
    backend: true,
    age: 26,
    bio: "Software Engineer that loves writing letter to her future husband on diseyi.medium.com",
  });
});

app.listen(PORT)
