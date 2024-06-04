const express = require('express'); 
const mysql = request("mysql");

const app = express();

app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "cito_computer"
});

db.connect((err) =>{
    if(err)
    {
        console.log(err);
    }
    console.log("MySql Connected...");
});