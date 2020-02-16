const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.route('/').post((req, res) => {
    console.log(req.body);
    let { searchTerms, filter, filterTerm } = req.body;
    let fBooks;
    searchTerms = searchTerms.replace(/\s/g, '+');
    const link = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(link + searchTerms)
        .then(response => { return response.json() })
        .then(books => {
            const Books = books.items;
            if (filter) {
                switch (filter) {
                    case inpublisher:
                        fBooks = Books.filter(function (book) {
                            return book.volumeInfo.publisher === filterTerm;
                        });

                        break;
                    case inauthor:
                        fBooks = Books.filter(function (book) {
                            return !book.volumeInfo.authors.indexOf(filterTerm);
                        });
                        break;
                    case isbn:
                        fBooks = Books.filter(function (book) {
                            return book.volumeInfo.industryIdentifiers[1].identifier === filterTerm;
                        });
                        break;
                    case subject:
                        fBooks = Books.filter(function (book) {
                            return !book.volumeInfo.categories.indexOf(filterTerm);
                        });
                        break;
                    default:
                        console.log('default case');
                        fBooks = Books;
                }
                console.log('fbooks = ', fBooks);
                res.json(fBooks);
            }
            else {
                res.json(Books);
            }

        })
        .catch(err => res.status(400).json('Error' + err));
})


module.exports = router;