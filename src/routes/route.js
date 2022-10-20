const express = require('express');
const router = express.Router();

let persons = [
  {
    name: "PK",
    age: 10,
    votingStatus: false,
  },
  {
    name: "SK",
    age: 20,
    votingStatus: false,
  },
  {
    name: "AA",
    age: 70,
    votingStatus: false,
  },
  {
    name: "SC",
    age: 5,
    votingStatus: false,
  },
  {
    name: "HO",
    age: 40,
    votingStatus: false,
  },
];

router.post("/persons", function (req, res) {

  let input = req.query.inputeage
  for (i of persons) {
    if (i.age >= input) {
      i.votingStatus=true
    }

  }
  return res.send(persons)



    }
);


module.exports = router;
