"use strict";

const express = require("express");
const scores = express.Router();
const pool = require("./connection");


function selectAll(res) {
    pool.query("select * from scores order by scores desc limit 10").then(result => res.json(result.rows));
}

scores.get("/scores", (req, res) => {
    selectAll(res);
});

scores.post("/scores", (req, res) => {
    pool.query("insert into scores (username, scores) values ($1::text, $2::int)", [
        req.body.username,
        req.body.scores
    ]).then(() => {
        selectAll(res);
    });
});


module.exports = scores;