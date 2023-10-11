const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const issuesRouter = require("./routes/issues");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/issues", issuesRouter);

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = server; 