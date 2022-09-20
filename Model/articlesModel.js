import mongoose from "mongoose";

const articleShema = mongoose.Schema({

    "title": String,
    "description": String,
    "categorieId": String
});

const Article = mongoose.model('article', articleShema);

export default Article;