const express = require('express');
const res = require('express/lib/response');
const app = express();
var osu = require('node-os-utils')

// Variables
var logo = "/public/images/logos/"

// FUNCTIONS

// ----------------------

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// System USE
app.get("/api/cpu-use", function(req, res) {
    var cpu = osu.cpu
    cpu.usage().then(info => {
        res.json(info);
    })
});

app.get("/api/ram-use", function(req, res) {
    var mem = osu.mem
    mem.info()
        .then(info => {
            res.json(info);
        })
});

app.get("/api/disk-use", function(req, res) {
    var drive = osu.drive
    drive.info()
        .then(info => {
            res.json(info);
        })
});

module.exports = app;