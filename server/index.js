const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require('cors')
const authRouter = require("./routes/authRouter");
const postRouter = require("./routes/postRouter");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

const PORT = 5000 || process.env.PORT;

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongeDB");
  }
);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
