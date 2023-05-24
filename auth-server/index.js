"use strict";

require("dotenv").config();

const server = require(".//src/server.js");
const PORT = process.env.PORT || 3001;

db.sync().then(() => {
  server.start(PORT);
});
