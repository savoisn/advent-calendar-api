const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get("/daySinceFirstDec", (req, res) => {
  const startUpDateStr ="2020-11-30T00:00+01:00"
	const startUpDate = Date.parse(startUpDateStr);

  const nbDay = Math.floor((Date.now() - startUpDate)/(1000 * 3600 * 24))

  res.send({"daySinceFirstDec": nbDay});
});

app.listen(8080, () => {
  console.log("App's running on port 8080");
});

