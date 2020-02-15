const express = require('express');
const router = express.Router();


router.route('/').get((req, res) => {
    console.log(req.body);
    //inauthor | inpublisher | subject | isbn
    ///Google books api logic
    //https://www.googleapis.com/books/v1/volumes?q=search+terms
    // Book.find()
    //     .sort({ createdAt: -1 })
    //     .then(books => {

    //         console.log(books);
    //         res.json(books)
    //     })
    //     .catch(err => res.status(400).json('Error' + err));
})


module.exports = router;