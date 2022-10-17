const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger/logger')
const abc = require('../util/helper')
const format = require('../validator/formatter')
//importing external package
const underscore = require('underscore')
const lodash=require('lodash')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log(" ", xyz.myFunction())
    console.log(" ", abc.date());
    console.log('',abc.abc())
 console.log("", format.format());

//let month1 = [
//  "January",
//  "February",
//  "March",
//  "April",
//  "May",
//  "June",
//  "july",
//  "August",
//  "September",
//  "October",
//  "November",
//  "December",
//];
//console.log(_.chunk(month1, 4));
//
//const oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
//console.log(_.tail(oddNum, 9));
//
//const Num = [2, 5, 4, 2, 7];
//console.log(_.union(Num));
//
//const keyValue = [
//  ["horror", "The Shining"],
//  ["drama", "Titanic"],
//  ["thriller", "Shutter Island"],
//  ["fantasy", "Pans Labyrinth"],
//];
//
//console.log(_.fromPairs(keyValue));
//
//
//
  res.send('My first ever api!')

   //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;
