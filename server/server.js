const express = require("express");
const app = express();
const port = 4000;

let id = 0;
function getId() {
  id++;
  return id;
}

function createEntity(data) {
  return {
    id: getId(),
    data
  };
}

const db = {
  questions: [
    createEntity({
      question: "Who's the longest running character on Hollyoaks?",
      options: ["Tony", "Jason", "Mercedes"],
      answer: "Tony"
    }),
    createEntity({
      question: "What year did Hollyoaks start running?",
      options: ["1995", "1985", "2005"],
      answer: "1995"
    }),
    createEntity({
      question: "Wh",
      options: ["Tony", "Jason", "Mercedes"],
      answer: "Tony"
    }),
    createEntity({
      question: "Who's the longest running character on Hollyoaks?",
      options: ["Tony", "Jason", "Mercedes"],
      answer: "Tony"
    })
  ]
};

app.get("/questions", (req, res) => {
  res.json(db.questions);
});

app.get("/question", (req, res) => {
  const seed = Math.round(Math.random() * 1000);
  const randomIndex = seed % db.questions.length;
  console.log(randomIndex, seed);
  res.json(db.questions[randomIndex]);
});

app.listen(port, () => console.log(`Example app listening on port ${4000}!`));
