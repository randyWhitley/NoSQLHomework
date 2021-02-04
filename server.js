// Some Bullshit Dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const workout = require("./models");
const app = express();

const PORT = process.env.PORT || 8080;
const db = require("./models");
