const express = require("express");
const userRouter = require("./routers/user.js");

const app = express();

app.use(express.json());

app.use(userRouter);

app.listen(process.env.PORT || 5000, () =>
  console.log(`server run http://localhost:${process.env.PORT || 5000}`)
);
