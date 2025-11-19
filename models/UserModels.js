import pool from './db.js';
export const createUser = async (email, password) =>{
    if(email === ''){
        throw new Error('Invalid email!!');
    }

    if(!validator.isEmail(email)){
        throw new Error('Invalid email Format!!'); 
    }


    const [user] = await pool.query(
        "SELECT * FROM tbl_user WHERE email = ?",
        [email]
    )

    if(user){
        throw new Error ('An account is already created with that email')
    }

    if(password === ''){
        throw new Error('Invalid password');

    }
    if(validator.isStrongPassword(password)){
        throw new Error ('Password is too weak!');
    }

    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(password, salt);

    const [newUser] = await pool.query(
        "INSERT INTO tbl_user(email, password) VALUES(?,?)",
        [email, newPassword]
    )

    return newUser.insertId;







}
  

export const login = async (email, password) => {
    if(email === '' || password === ''){
        throw new Error('Email and Password are required!!');
    }

    const [user] = await pool.query ("SELECT * FROM tbl_user WHERE email = ?",[email]);
    if(user.length === 0){
        throw new Error ('An account with that email does not exist!!');
    }

    if(!bcrypt.compareSync(password, user[0].password)){
        throw new Error ('Incorrect password!!');
    }

    return user[0].id;
}