const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/movies', function (req, res){
    ////console.log("The path params in the request are : ", req.query)
    let movies = ['Rang de basanti', 'The shining', 'Lord of rings','Batman begins']
    res.send(movies)
})


// Example 1 for path params
router.get('/movies/:index', function (req, res) {
    //console.log("movies", res.params)
    const index = req.params.index;
    if (index > (movies.length -1)) {
res.send("sure")
    } else {
    res.send(movies[index])
    }
    const movies = [
        "Rang de basanti",
        "The shining",
        "Lord of rings",
        "Batman begins",
    ];

    res.send(movies[index])

})

// Example 2 for path params
router.get('/movies_list', function (req, res) {
    const movies_arr = [{
        id: 1,
        name: 'The Shining',
    }, {
        id: 2,
        name: 'Incendies'
    }, {
        id: 3,
        name: 'Rang de Basanti'
    }, {
        id: 4,
        name: 'Finding Nemo'
    }]
    res.send(movies_arr)

    router.get('/', function (req, res) {
        movires1 = []

        const movie = movies1.find(film => film.id == id)
        if (movie) {
            req.send()
        } else {
            req.send("no")
        }
    }
})

module.exports = router;
// 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message
