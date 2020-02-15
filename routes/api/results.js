const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.route('/').post((req, res) => {
    console.log(req.body);
    let str = req.body.searchTerms;
    //const terms = string.join('+');
    str = str.replace(/\s/g, '+');
    console.log(str);
    //inauthor | inpublisher | subject | isbn
    ///Google books api logic

    fetch("https://www.googleapis.com/books/v1/volumes?q=" + str)
        .then(response => { return response.json() })
        .then(books => {
            console.log(books.items);
            res.json(books.items);
        })
        .catch(err => res.status(400).json('Error' + err));
})


module.exports = router;