
const router = require('express').Router();
let Book = require('../../models/Book');
const mongoose = require('mongoose');
//const auth = require("../../middleware/auth");


router.route('/').get((req, res) => {
    console.log(req.body);
    Book.find()
        .sort({ createdAt: -1 })
        .then(books => {

            console.log(books);
            res.json(books)
        })
        .catch(err => res.status(400).json('Error' + err));
})

router.route('/:Id').get((req, res) => {

    Book.find({ 'bookId': req.params.Id })
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error' + err));
})


// router.post('/add',auth,(req, res) => {
//     console.log(req.body);
//     const bookId = Number(req.body.bookId);

//     const authorId = Number(req.body.authorId);
//     const userEmail = req.body.email;
//     const newBook = new Book({ bookId, authorId ,userEmail});
//     newBook.save()
//         .then(() => {
//             res.json(newBook)
//         })
//         .catch((err) => {
//             res.status(400).json('Error : ' + err)
//         })

// })

// router.delete('/:Id',auth,(req, res) => {

//     Book.findById(req.params.Id)
//     .then(book => book.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ success: false }));

//         })




router.route('/:Id').delete((req, res) => {
    Book.findOneAndDelete({ 'bookId': req.params.Id })
        .then(() => {
            res.json({ success: true })

        })
        .catch((err) => {
            res.status(404).json({ success: false })
        })

})


router.route('/update/:Id').post((req, res) => {


    const authorId = Number(req.body.authorId);

    Book.findById(req.params.Id)
        .then(book => {
            book.authorId = authorId;
            book.save()
                .then(() => {
                    res.json('Book Updated')
                })
                .catch((err) => {
                    res.status(400).json('Error : ' + err)
                })

        })

})
module.exports = router;