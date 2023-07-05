const express = require("express");
const app = express();
require("dotenv").config();

const dynamodb = require("@cyclic.sh/dynamodb")({
  accessKeyId: "YOUR_ACCESS_KEY",
  secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
  region: "YOUR_REGION",
});

app.use(express.json());

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
