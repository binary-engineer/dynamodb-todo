const express = require("express");
const app = express();
require("dotenv").config();

const CyclicDb = require("@cyclic.sh/dynamodb");
const db = CyclicDb("ill-pink-katydid-cuffCyclicDB");

app.use(express.json());

const animals = db.collection("animals");

// let item = await animals.get("leo");
// console.log(item);

app.get("/", async (req, res) => {
  animals
    .get("leo")
    .then((result) => {
      res.json(result.Items);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "An error occurred" });
    });
});

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
