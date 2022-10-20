const express = require('express');
const router = express.Router();


let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
  },
];

router.post("/players", function (req, res) {
  //LOGIC WILL COME HERE
    let player = req.body;
    let playerExists = players.find(p => p.name === player.name);  //check if player already exists
    if (playerExists) {
        res.send('Player already exists');
    } else {
        players.push(player);
        res.send(player);
    }
});


module.exports = router;
