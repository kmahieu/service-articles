
import  Categorie  from './categoriesModel.js';
import  User  from './userModel.js';
import mongoose from "mongoose";

const articleShema = mongoose.Schema({

    "title": String,
    "description": String,
    "categorieId": String,
    "userId": String,
    "User": {
        type: User
    },
    "Categorie": {
        type: Categorie
    }
});

const Article = mongoose.model('article', articleShema);

export default Article;