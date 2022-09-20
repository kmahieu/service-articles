
import { Categorie } from '../Model/categoriesModel';
import { User } from '../Model/userModel';
import mongoose from "mongoose";

const articleShema = mongoose.Schema({

    "title": String,
    "description": String,
    "categorieId": String,
    "userId": String,
    "User": User,
    "Categorie": Categorie,
});

const Article = mongoose.model('article', articleShema);

export default Article;