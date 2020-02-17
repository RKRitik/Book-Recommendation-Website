const express = require('express');
const router = express.Router();
const Review = require('../../models/Review');

router.route('/').post((req, res) => {
    console.log('got review!');
    const {
        review,
        rating,
        bookId,
        userName,
        userId } = req.body;
    Review.findOne({ userId })
        .then(rev => {
            if (rev) return res.status(400).json({ msg: 'Review already exists' });


            const newReview = new Review({
                review,
                rating,
                bookId,
                userName,
                userId
            });

            newReview.save()
                .then(() => {
                    res.json(newReview)
                })
                .catch((err) => {
                    res.status(400).json('Error : ' + err)
                })

        })
})

module.exports = router;