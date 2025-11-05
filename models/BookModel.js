import pool from './db.js';

export const getBooks = async () =>{
    const [rows] = await pool.query("SELECT * FROM tbl_book")
    return rows;
}
