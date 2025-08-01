import express from "express";
import 'dotenv/config';
import connectDB from "./src/config/db.js";

connectDB();

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running")
})

const MY_PORT = process.env.PORT || 5000;
app.listen(MY_PORT, ()=> {console.log(`server running on port: ${MY_PORT}`)});
