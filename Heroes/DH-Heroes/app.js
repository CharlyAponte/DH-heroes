const { publicDecrypt } = require("crypto");
const express = require("express");
const res = require("express/lib/response");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("Heroes");
});
app.get("/home", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "view/index.html"));
});

app.get("/babbage", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "view/babbage.html"));
});

app.get("/berners", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "view/berners-lee.html"));
});

app.get("/clarke", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "view/clarke.html"));
});

app.get("/hamilton", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "view/hamilton.html"));
});

app.get("/hopper", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "view/hopper.html"));
});

app.get("/lovelace", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "view/lovelace.html"));
});

app.get("/turing", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "view/turing.html"));
});
app.listen(3030, () => {
  console.log("Servidor corriendo Heroes");
});
