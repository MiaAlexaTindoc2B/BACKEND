import { stat } from 'fs';
import pool from './db.js';

export const getBooks = async () =>{
    const [rows] = await pool.query("SELECT * FROM tbl_book")
    return rows;
}

export const insertBook = async (title, genre, status) => {
    const [result] = await pool.query(
        "INSERT INTO tbl_book (title, genre, status) VALUES (?, ?, ?)", 
        [title, genre, status]
    );
    return result.insertId;
}

export const updateBook = async (title, genre, status, bookId) => {
    const [result] = await pool.query(
        "UPDATE tbl_book SET title = ?, genre = ?, status = ? WHERE id = ?",
        [title, genre, status, bookId]
    );
    return result.affectedRows;
}   

export const deleteBook = async (bookId) => {
    const [result] = await pool.query(
        "DELETE FROM tbl_book WHERE id = ?",
        [bookId]
    );
    return result.affectedRows;
}    