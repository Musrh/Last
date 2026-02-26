const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Railway fonctionne");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
