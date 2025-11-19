import * as BookModel from "../models/BookModel.js";

export const fetchBooks = async (req, res) =>{
    try{
        const books = await BookModel.getBooks();
        res.status(200).json(books);
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}


export const createBook = async (req, res) => {
    const { title, genre, status } = req.body;

    try {
        const bookId = await BookModel.insertBook(title, genre, status);
        res.status(201).json({success: true, message: bookId});
    } catch (e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export const editBook = async (req, res) => {
    const { title, genre, status } = req.body;
    const { bookId } = req.params;

    try {
        const updateId = await BookModel.updateBook(title, genre, status, bookId);
        res.status(200).json({success: true, message: bookId});
    } catch (e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export const deleteBook = async (req, res) => {
    const {bookId} = req.params;

    try {
        const result = await BookModel.updateBook(bookId);
        res.status(200).json({success: true, message: deleteId});
    } catch (e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }   
};


