const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema(
    {
        bookId: {
            type: Number,   //Number/String/Date
            required: true,
            unique: true,
            trim: true,
            minlength: 1
        },
        language: {
            type: String,
            //required:true,
        }
        ,
        genreId: {
            type: String,
            required: true
        }
        ,
        title: {
            type: String,
            required: true,
            unique: true
        }
        ,
        date_of_publication: {
            type: Date
        }
        ,

        publisherId: {
            type: Number,
            required: true,
            unique: true,
            trim: true,
            minlength: 1
        },
        authorId: {
            type: Number,
            required: true

        },
        rating: {
            type: Number,

        },
        userEmail: {
            type: String,
            required: true,
            trim: true
        }

    },
    { timestamps: true }

);
const Book = mongoose.model('book', BookSchema);
module.exports = Book;