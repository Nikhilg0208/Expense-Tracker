import express from "express";

const port = process.env.PORT || 4000;
const app = express();

app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
