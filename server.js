import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";
import methodOverride from "method-override";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});