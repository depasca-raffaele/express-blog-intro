import express from 'express';

const app = express();

app.listen(3000, (error) =>{
    if(error){
        console.error('server error');
    }else{
        console.log("server live");
    }
})