import express from "express";
import mongoose from "mongoose";
import { shortUrl, getOriginalUrl } from "./controllers/url.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect(
    "mongodb+srv://sonalidutta45bonu:sonalinodejs@cluster0.litzxn8.mongodb.net/",
    { dbName: "NodeJs_Mastery_Course" }
  )
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

//   rendering the ejs file
app.get("/", (req, res) => {
  res.render("index.ejs", { shortUrl: null });
});

// sharing url logic
app.post("/short", shortUrl);

// redirecct to original url using short code :- Dynamic routing  || the route name is shortCode here
app.get("/:shortCode", getOriginalUrl)
const port = 2000;
app.listen(port, () =>
  console.log(`My server is currently running on ${port}`)
);
