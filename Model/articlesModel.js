
import mongoose from "mongoose";

const articleShema = mongoose.Schema({

    "title": String,
    "description": String,
    "categorieId": String,
    "userId": String,
    "User": {
        _id: {type: String},
        name: {type: String},
        firstname: {type: String},
        email: {type: String},
    },
    "Categorie": {
        type: {type: String},
        _id: {type: String},
        name: {type: String}
    }, 
});

const Article = mongoose.model('article', articleShema);

export default Article;