const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const app = express();

mongoose.connect("mongodb://localhost/whatsapp-enhancer", { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  email
