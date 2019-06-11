"use strict";

const express = require("express");
const questions = express.Router();
const pool = require("./connection");


questions.get("/questions", (req, res) => {
    pool.query("select * from questions order by random() limit 10").then(result => res.json(result.rows));
});


module.exports = questions;