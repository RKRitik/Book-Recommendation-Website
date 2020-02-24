
const router = require('express').Router();
let Recommend = require('../../models/Recommendation');
const mongoose = require('mongoose');
const auth = require("../../middleware/auth");

//all
router.route('/').get((req, res) => {
    //console.log(req.body);
    Recommend.find()
        .sort({ createdAt: -1 })
        .then(recommendations => {

            // console.log(recommendations);
            res.json(recommendations);
            res.end();
        })
        .catch(err => res.status(400).json('Error' + err));
})

//for user
router.route('/:Id').get((req, res) => {
    console.log('got id=', req.paramms.Id);
    Recommend.find({ 'userId': req.params.Id })
        .then(recommendations => res.json(recommendations))
        .catch(err => res.status(400).json('Error' + err));
})


// router.post('/', auth, (req, res) => {
//     console.log(req.body);

//     const bookId = Number(req.body.bookId);

//     const authorId = Number(req.body.authorId);
//     const userEmail = req.body.email;
//     const newBook = new Book({ bookId, authorId, userEmail });
//     newBook.save()
//         .then(() => {
//             res.json(newBook)
//         })
//         .catch((err) => {
//             res.status(400).json('Error : ' + err)
//         })

// })



// router.route('/:Id').delete((req, res) => {
//     Book.findOneAndDelete({ 'bookId': req.params.Id })
//         .then(() => {
//             res.json({ success: true })

//         })
//         .catch((err) => {
//             res.status(404).json({ success: false })
//         })

// })


// router.route('/update/:Id').post((req, res) => {


//     const authorId = Number(req.body.authorId);

//     Book.findById(req.params.Id)
//         .then(book => {
//             book.authorId = authorId;
//             book.save()
//                 .then(() => {
//                     res.json('Book Updated')
//                 })
//                 .catch((err) => {
//                     res.status(400).json('Error : ' + err)
//                 })

//         })

// })
module.exports = router;