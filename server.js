"use strict";

const express = require("express");
const app = express();
const questionRoutes = require("./question.api");
const scoreRoutes = require("./scores.api");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use("/api", questionRoutes, scoreRoutes);

let port = 3000;
app.listen(port, () => console.log(`Server running on PORT: ${port}.`)); 