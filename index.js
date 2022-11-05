const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3030;

app.get("/", (req, res) => {
  res.send({
    slackUsername: "Diseyi",
    backend: true,
    age: 26,
    bio: "Software Engineer that loves writing letter to her future husband on diseyi.medium.com",
  });
});

const Calculate = (req, res) => {
  const requestBody = req.body;
  const requestQuery = req.query;

  const bodyX = Number(requestBody?.x);
  const queryX = Number(requestQuery?.x);

  const bodyY = Number(requestBody?.y);
  const queryY = Number(requestQuery?.y);

  const bodyCheck =
    Object.keys(requestBody).length === 0 && requestBody.constructor === Object;
  const querycheck =
    Object.keys(requestQuery).length === 0 &&
    requestQuery.constructor === Object;

  if (bodyCheck === true && querycheck === true) {
    return res.status(404).json({
      operation_type: "must be either addition, subtraction of multiplication",
      x: "must be a Integer",
      y: "must be a Integer",
    });
  } 

  if (bodyCheck === false &&  (!Number.isInteger(bodyX) | !Number.isInteger(bodyY)) ) {
    return res.status(404).json({
      operation_type: "must be either addition, subtraction of multiplication",
      x: "must be a Integer",
      y: "must be a Integer",
    });
  } 

  if (querycheck === false &&  (!Number.isInteger(queryX) | !Number.isInteger(queryY)) ) {
    return res.status(404).json({
      operation_type: "must be either addition, subtraction of multiplication",
      x: "must be a number",
      y: "must be a number",
    });
  } 


  // addition
  if (
    (requestBody?.operation_types?.toLowerCase() === "add") |
    (requestBody?.operation_types?.toLowerCase() === "addition") |
    (requestBody?.operation_types?.toLowerCase() === "plus") |
    (requestBody?.operation_types?.toLowerCase() === "+")
  ) {
    try {
      const add = bodyX + bodyY;
      return res.status(200).json({
        slackUsername: "Diseyi",
        operation_type: "addition",
        result: add,
      });
    } catch (error) {
      return res.status(500).json({
        error: "An error occurred",
      });
    }
  }

  if (
    (requestQuery?.operation_types?.toLowerCase() === "add") |
    (requestQuery?.operation_types?.toLowerCase() === "addition") |
    (requestQuery?.operation_types?.toLowerCase() === "plus") |
    (requestQuery?.operation_types?.toLowerCase() === "+")
  ) {
    try {
      const add = queryX + queryY;
      return res.status(200).json({
        slackUsername: "Diseyi",
        operation_type: "addition",
        result: add,
      });
    } catch (error) {
      return res.status(500).json({
        error: "An error occurred",
      });
    }
  }

  // subtraction
  if (
    (requestBody?.operation_types?.toLowerCase() === "minus") |
    (requestBody?.operation_types?.toLowerCase() === "subtract") |
    (requestBody?.operation_types?.toLowerCase() === "subtraction") |
    (requestBody?.operation_types?.toLowerCase() === "-")
  ) {
    try {
      const minus = bodyX - bodyY;
      return res.status(200).json({
        slackUsername: "Diseyi",
        operation_type: "subtraction",
        result: minus,
      });
    } catch (error) {
      return res.status(500).json({
        error: "An error occurred",
      });
    }
  }

  if (
    (requestQuery?.operation_types?.toLowerCase() === "minus") |
    (requestQuery?.operation_types?.toLowerCase() === "subtract") |
    (requestQuery?.operation_types?.toLowerCase() === "subtraction") |
    (requestQuery?.operation_types?.toLowerCase() === "-")
  ) {
    try {
      const minus = queryX - queryY;
      return res.status(200).json({
        slackUsername: "Diseyi",
        operation_type: "subtraction",
        result: minus,
      });
    } catch (error) {
      return res.status(500).json({
        error: "An error occurred",
      });
    }
  }

  // multiplication
  if (
    (requestBody?.operation_types?.toLowerCase() === "multiply") |
    (requestBody?.operation_types?.toLowerCase() === "multiplication") |
    (requestBody?.operation_types?.toLowerCase() === "times") |
    (requestBody?.operation_types?.toLowerCase() === "*")
  ) {
    try {
      const multiply = bodyX * bodyY;
      return res.status(200).json({
        slackUsername: "Diseyi",
        operation_type: "multiplication",
        result: multiply,
      });
    } catch (error) {
      return res.status(500).json({
        error: "An error occurred",
      });
    }
  }

  if (
    (requestQuery?.operation_types?.toLowerCase() === "multiply") |
    (requestQuery?.operation_types?.toLowerCase() === "multiplication") |
    (requestQuery?.operation_types?.toLowerCase() === "times") |
    (requestQuery?.operation_types?.toLowerCase() === "*")
  ) {
    try {
      const multiply = queryX * queryY;
      return res.status(200).json({
        slackUsername: "Diseyi",
        operation_type: "multiplication",
        result: multiply,
      });
    } catch (error) {
      return res.status(500).json({
        error: "An error occurred",
      });
    }
  }

  return res.status(404).json({
    operation_type: "must be either addition, subtraction of multiplication",
    x: "must be a Integer",
    y: "must be a Integer",
  });
};

app.post("/calculate", Calculate);

app.listen(PORT);
