import express from "express";


const app = express();

const port = 3000;


app.use(express.json());

try{
    app.listen(port, () =>{
    console.log('listening to port 3000...');
});

}catch(e){
    console.log(e);
}

app.get('/hazel',async (request, response) =>{
    response.status(200).json({message: "Hi,I am Hazel"});
});