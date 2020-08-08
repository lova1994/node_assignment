const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(require("./route/endpoints"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
