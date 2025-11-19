import pool from './db.js';
export const createUser = async (email, password) =>{
    if(email === ''){
        throw new Error('Invalid email bitch! pakilagay naman ng tama toy!');
    }

    if(!validator.isEmail(email)){
        throw new Error('Ano ba naman yan toy Invalid email Format!!'); 
    }


    const [user] = await pool.query(
        "SELECT * FROM tbl_user WHERE email = ?",
        [email]
    )

    if(user){
        throw new Error ('An account is already createdd with that email (may kagaya ka na toy!)')
    }

    if(password === ''){
        throw new Error('Invalid password');

    }
    if(validator.isStrongPassword(password)){
        throw new Error ('Password too Weak bitch!');
    }

    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(password, salt);

    const [newUser] = await pool.query(
        "INSERT INTO tbl_user(email, password) VALUES(?,?)",
        [email, newPassword]
    )

    return newUser.insertId;

};
